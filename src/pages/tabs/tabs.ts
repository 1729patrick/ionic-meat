import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';
import { RestaurantService } from '../restaurants/restaurant/restaurants.service';
/*import { RestaurantDetailPage } from '../restaurant-detail/restaurant-detail';
import { MenuPage } from '../menu/menu';
import { ReviewsPage } from '../reviews/reviews';*/

@IonicPage()
@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage {
    restaurant: Restaurant;

    restaurantParams: {
        restaurantId: String;
    }

    restaurantRoot = 'RestaurantDetailPage';
    menuRoot = 'MenuPage';
    reviewsRoot = 'ReviewsPage';

    constructor(
        public restaurantService: RestaurantService,
        public navParams: NavParams) {

            this.restaurantParams = {
                restaurantId: this.navParams.get('restaurantId')  //restaurantId recebe o parametro passado de restaurant
            }}

            ionViewDidLoad(){

                console.log("Entrou em tabs.");
            }

            ionViewWillLeave(){
                console.log("Saiu de tabs.");
            }
        }
