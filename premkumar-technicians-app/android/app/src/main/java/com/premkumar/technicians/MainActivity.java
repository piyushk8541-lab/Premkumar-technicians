package com.premkumar.technicians;

import android.os.Bundle;
import androidx.core.splashscreen.SplashScreen;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        // Install before super.onCreate: Android 12+ system splash and AndroidX backport.
        SplashScreen.installSplashScreen(this);
        registerPlugin(ExternalLinksPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
