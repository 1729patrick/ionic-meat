import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantService } from '../../providers/restaurant/restaurants.service';
import { Restaurant } from'../../providers/restaurant/restaurant.model';

@IonicPage()
@Component({
    selector: 'page-restaurant-detail',
    templateUrl: 'restaurant-detail.html',
})
export class RestaurantDetailPage {
    restaurant: Restaurant;

    constructor(
        public navCtrl: NavController,
        public restaurantService: RestaurantService,
        public navParams: NavParams) {

            let id = this.navParams.data.id;

            this.restaurantService.restaurantById(id)
            .subscribe(restaurant => {
                this.restaurant = restaurant;
                console.log(this.restaurant)
            })
        }

        ionViewDidLoad() {
            console.log("Entrou em Detalhes.")
        }

        ionViewWillLeave() {
            console.log("Saiu de Detalhes.")
        }

    }
