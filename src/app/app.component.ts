import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from '../pages/welcome/welcome';


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage:any = WelcomePage;

    constructor(
        platform: Platform,
        statusBar: StatusBar,
        splashScreen: SplashScreen) {

            //COR DA NAVBAR DO ANDROID
            platform.ready().then(() => {
            statusBar.overlaysWebView(true);
            statusBar.backgroundColorByHexString("#f53d3d");
        });
    }
}
