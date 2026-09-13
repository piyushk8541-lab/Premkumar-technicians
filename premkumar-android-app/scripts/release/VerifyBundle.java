import java.io.InputStream;
import java.nio.file.Path;
import java.security.CodeSigner;
import java.security.MessageDigest;
import java.security.cert.X509Certificate;
import java.util.HexFormat;
import java.util.Locale;
import java.util.jar.JarEntry;
import java.util.jar.JarFile;

/** JDK 21 source launcher: authenticate EVERY AAB payload entry against the pinned upload cert.
 * Android upload certificates may be self-signed; a public CA trust chain is not required.
 * No key/password is read here, and no keystore/certificate private data is printed.
 */
class VerifyBundle {
    public static void main(String[] args) throws Exception {
        if (args.length != 2 || !args[1].matches("[0-9a-fA-F]{64}")) {
            throw new IllegalArgumentException("Usage: VerifyBundle.java file.aab expectedCertificateSha256");
        }
        String expected = args[1].toLowerCase(Locale.ROOT);
        int verified = 0;
        try (JarFile jar = new JarFile(Path.of(args[0]).toFile(), true)) {
            if (jar.getJarEntry("BundleConfig.pb") == null ||
                jar.getJarEntry("base/manifest/AndroidManifest.xml") == null) {
                throw new SecurityException("Missing Android App Bundle structure.");
            }
            var entries = jar.entries();
            byte[] buffer = new byte[32768];
            while (entries.hasMoreElements()) {
                JarEntry entry = entries.nextElement();
                if (entry.isDirectory()) continue;
                // Reading through EOF causes JarVerifier to validate the cryptographic digest.
                try (InputStream input = jar.getInputStream(entry)) {
                    while (input.read(buffer) != -1) { }
                }
                String name = entry.getName().toUpperCase(Locale.ROOT);
                if (name.equals("META-INF/MANIFEST.MF") || name.matches("META-INF/[^/]+\\.(SF|RSA|DSA|EC)")) continue;
                CodeSigner[] signers = entry.getCodeSigners();
                if (signers == null || signers.length != 1) {
                    throw new SecurityException("Unsigned or multiply signed bundle payload.");
                }
                X509Certificate cert = (X509Certificate) signers[0].getSignerCertPath().getCertificates().get(0);
                cert.checkValidity();
                String actual = HexFormat.of().formatHex(MessageDigest.getInstance("SHA-256").digest(cert.getEncoded()));
                if (!actual.equals(expected)) throw new SecurityException("Bundle signer does not match the approved upload certificate.");
                verified++;
            }
        }
        if (verified == 0) throw new SecurityException("No signed bundle payload was found.");
        System.out.println("PASS: " + verified + " AAB payload entries verified against the approved upload certificate.");
    }
}
