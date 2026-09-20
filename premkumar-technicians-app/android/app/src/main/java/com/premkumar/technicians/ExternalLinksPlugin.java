package com.premkumar.technicians;

import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.net.Uri;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

/** Opens approved link schemes outside the app, without broad package queries or permissions. */
@CapacitorPlugin(name = "ExternalLinks")
public class ExternalLinksPlugin extends Plugin {
    @PluginMethod
    public void open(PluginCall call) {
        String url = call.getString("url");
        if (url == null || url.trim().isEmpty()) {
            call.reject("A URL is required", "INVALID_URL");
            return;
        }
        Uri uri = Uri.parse(url);
        String scheme = uri.getScheme();
        final String action;
        if ("tel".equalsIgnoreCase(scheme)) {
            // Open the dialer; never place a call automatically.
            action = Intent.ACTION_DIAL;
        } else if ("mailto".equalsIgnoreCase(scheme)) {
            action = Intent.ACTION_SENDTO;
        } else if ("https".equalsIgnoreCase(scheme) && uri.getHost() != null && uri.getUserInfo() == null) {
            // Android App Links can choose WhatsApp/Maps; otherwise an installed browser handles HTTPS.
            action = Intent.ACTION_VIEW;
        } else {
            call.reject("Unsupported link", "INVALID_URL");
            return;
        }
        getActivity().runOnUiThread(() -> {
            try {
                Intent intent = new Intent(action, uri);
                if (Intent.ACTION_VIEW.equals(action)) intent.addCategory(Intent.CATEGORY_BROWSABLE);
                getActivity().startActivity(intent);
                call.resolve();
            } catch (ActivityNotFoundException | SecurityException exception) {
                call.reject("No application can open this link", "NO_HANDLER", exception);
            }
        });
    }
}
