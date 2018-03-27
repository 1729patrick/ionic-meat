import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RestaurantsPage } from '../restaurants/restaurants';




@IonicPage()
@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html',
})
export class WelcomePage {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams) { }

        pushHome(): void{
            this.navCtrl.setRoot(RestaurantsPage);
        }
        pushLogin():void{
            this.navCtrl.setRoot(LoginPage);
        }
    }
