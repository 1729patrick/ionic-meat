import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import { RestaurantService } from '../restaurants/restaurant/restaurants.service';

@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html',
})
export class TabsPage {
    restaurantParams: {
        restaurantId: String;
    }

    restaurantRoot = 'RestaurantDetailPage';
    menuRoot = 'MenuPage';
    reviewsRoot = 'ReviewsPage';

    constructor(
        public restaurantService: RestaurantService,
        public navParams: NavParams,
        public navCtrl: NavController) {

            this.restaurantParams = {
                restaurantId: this.navParams.get('restaurantId')  //restaurantId recebe o id passado pelo restaurant
            }
        }

        ionViewDidLoad() {
            console.log("Entrou em tabs.");
        }

        ionViewWillLeave(){
            this.navCtrl.popToRoot();
            console.log("Saiu de tabs.");
        }
    }
