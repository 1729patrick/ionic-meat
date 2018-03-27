import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantService } from '../../pages/restaurants/restaurant/restaurants.service';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';
import { RestaurantsPage } from '../restaurants/restaurants';

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

            let id = this.navParams.data.restaurantId;
            this.restaurantService.restaurantById(id)
            .subscribe(restaurant => {
                this.restaurant = restaurant;
            })
        }

        ionViewDidLoad(){
            console.log("Entrou em Detalhes.")
        }

        ionViewWillLeave(){
            console.log("Saiu de Detalhes.")
        }

        pushHome(): void{
            this.navCtrl.setRoot(RestaurantsPage);
        }


    }
