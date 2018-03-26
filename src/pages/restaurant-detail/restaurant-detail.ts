import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { RestaurantService } from '../../pages/restaurants/restaurant/restaurants.service';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';

@IonicPage()
@Component({
    selector: 'page-restaurant-detail',
    templateUrl: 'restaurant-detail.html',
})
export class RestaurantDetailPage {
    public restaurant: Restaurant;
    
    constructor(
        public navCtrl: NavController,
        public httpClient: HttpClient,
        public restaurantService: RestaurantService,
        public navParams: NavParams) {

            let id = this.navParams.get('restaurantId');
            //alert(url + id);

            this.restaurantService.restaurantById(id)
            .subscribe(restaurant => this.restaurant = restaurant);

        }
    }
