import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { RestaurantService } from '../../providers/restaurant/restaurants.service';
import { CartPage } from '../cart/cart';
import { RestaurantDetailPage } from '../restaurant-detail/restaurant-detail';
import { MenuPage } from '../menu/menu';
import { ReviewsPage } from '../reviews/reviews';
import { CartService } from '../../providers/cart/cart.service';

@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html',
})
export class TabsPage {
    restaurantParams: {
        restaurantId: String;
    }
    total: number = 0;
    restaurantName: String;

    restaurantRoot = RestaurantDetailPage;
    menuRoot = MenuPage;
    reviewsRoot = ReviewsPage;

    constructor(
        public restaurantService: RestaurantService,
        public navParams: NavParams,
        public navCtrl: NavController,
        public cartService: CartService) {

            this.restaurantParams = {
                restaurantId: this.navParams.get('restaurantId'),  //restaurantId recebe o id passado pelo restaurant
            }
        }

        ionViewDidLoad() {
            console.log("Entrou em tabs.");

            this.restaurantName = this.navParams.get('restaurantName')
        }

        ionViewWillLeave() {
            console.log("Saiu de tabs.");
        }

        pushCart(): void {
            this.navCtrl.push(CartPage, {
                'total': this.total
            })
        }

    }
