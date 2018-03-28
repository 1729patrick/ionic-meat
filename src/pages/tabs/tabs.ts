import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { RestaurantService } from '../../providers/restaurant/restaurants.service';

@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html',
})
export class TabsPage {
    restaurantParams: {
        restaurantId: String;
        //access: boolean
    }

    restaurantRoot = 'RestaurantDetailPage';
    menuRoot = 'MenuPage';
    reviewsRoot = 'ReviewsPage';

    constructor(
        public restaurantService: RestaurantService,
        public navParams: NavParams,
        public navCtrl: NavController) {

            this.restaurantParams = {
                restaurantId: this.navParams.get('restaurantId'),  //restaurantId recebe o id passado pelo restaurant
                //access: true
            }
        }

        ionViewDidLoad() {
            console.log("Entrou em tabs.");
        }

        ionViewWillLeave() {
            this.navCtrl.popToRoot();
            console.log("Saiu de tabs.");
        }

    }
