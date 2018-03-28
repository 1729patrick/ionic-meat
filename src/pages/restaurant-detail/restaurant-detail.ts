import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantService } from '../../providers/restaurant/restaurants.service';
import { Restaurant } from'../../providers/restaurant/restaurant.model';
import { RestaurantsPage } from '../restaurants/restaurants';
import { CartPage } from '../cart/cart';

@IonicPage()
@Component({
    selector: 'page-restaurant-detail',
    templateUrl: 'restaurant-detail.html',
})
export class RestaurantDetailPage {
    restaurant: Restaurant;
    total: number = 0;

    constructor(
        public navCtrl: NavController,
        public restaurantService: RestaurantService,
        public navParams: NavParams) {

            let id = this.navParams.data.restaurantId;
            this.restaurantService.restaurantById(id)
            .subscribe(restaurant => {
                this.restaurant = restaurant;
            })
        }

        ionViewDidLoad() {
            console.log("Entrou em Detalhes.")
        }

        ionViewWillLeave() {
            console.log("Saiu de Detalhes.")
        }

        pushHome(): void {
            this.navCtrl.setRoot(RestaurantsPage);
        }

        pushCart(): void{
            this.navCtrl.push(CartPage, {
                'total': this.total
            })
        }


    }
