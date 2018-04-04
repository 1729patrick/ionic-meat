import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Storage } from '@ionic/storage';
import { WelcomePage } from '../pages/welcome/welcome';
import { RestaurantsPage } from '../pages/restaurants/restaurants';


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage:any;

    constructor(
        platform: Platform,
        splashScreen: SplashScreen,
        statusBar: StatusBar,
        storage: Storage) {

            //COR DA NAVBAR DO ANDROID
            platform.ready().then(() => {
            statusBar.overlaysWebView(true);
            statusBar.backgroundColorByHexString("#f53d3d");


            storage.get('token').then((data) => { //se o usuário estiver logado, lista de restaurante será a homepage
                if(data){
                    this.rootPage = RestaurantsPage;
                }else{
                    this.rootPage = WelcomePage;
                }
            });
        });
    }
}
