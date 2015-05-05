package br.net.meditec.app;

import org.apache.cordova.DroidGap;
import android.os.Bundle;

public class AppMeditecActivity extends DroidGap {
	
    /** Called when the activity is first created. */
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
    }
}
