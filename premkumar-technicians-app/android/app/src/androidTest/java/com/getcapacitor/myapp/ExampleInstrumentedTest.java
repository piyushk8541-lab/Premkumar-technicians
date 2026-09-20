package com.getcapacitor.myapp;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;

import android.content.Context;
import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import androidx.test.ext.junit.runners.AndroidJUnit4;
import androidx.test.platform.app.InstrumentationRegistry;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import org.junit.Test;
import org.junit.runner.RunWith;

/** Android-device checks. Not executed until a native toolchain/device is available. */
@RunWith(AndroidJUnit4.class)
public class ExampleInstrumentedTest {
    private Context appContext() {
        return InstrumentationRegistry.getInstrumentation().getTargetContext();
    }

    @Test
    public void correctStandaloneAppIdentity() {
        Context context = appContext();
        assertEquals("com.premkumar.technicians", context.getPackageName());
        Intent launch = context.getPackageManager().getLaunchIntentForPackage(context.getPackageName());
        assertNotNull(launch);
        assertNotNull(launch.getComponent());
        assertEquals("com.premkumar.technicians.MainActivity", launch.getComponent().getClassName());
        assertEquals("Prem Kumar Technicians", context.getApplicationInfo().loadLabel(context.getPackageManager()).toString());
    }

    @Test
    public void noUnnecessaryDangerousPermissionsOrNativeBackup() throws Exception {
        Context context = appContext();
        PackageInfo info = context.getPackageManager().getPackageInfo(context.getPackageName(), PackageManager.GET_PERMISSIONS);
        List<String> permissions = info.requestedPermissions == null ? Collections.emptyList() : Arrays.asList(info.requestedPermissions);
        for (String permission : Arrays.asList("android.permission.CALL_PHONE", "android.permission.READ_CONTACTS", "android.permission.ACCESS_FINE_LOCATION", "android.permission.READ_EXTERNAL_STORAGE", "android.permission.CAMERA")) {
            assertFalse("Unexpected permission: " + permission, permissions.contains(permission));
        }
        assertEquals(0, context.getApplicationInfo().flags & ApplicationInfo.FLAG_ALLOW_BACKUP);
    }
}
