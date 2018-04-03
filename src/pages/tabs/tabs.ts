import { Component } from '@angular/core';
import { NavParams, NavController, ToastController } from 'ionic-angular';
import { RestaurantService } from '../../providers/restaurant/restaurants.service';
import { CartPage } from '../cart/cart';
import { RestaurantDetailPage } from '../restaurant-detail/restaurant-detail';
import { MenuPage } from '../menu/menu';
import { ReviewsPage } from '../reviews/reviews';
import { CartService } from '../../providers/cart/cart.service';
import { AuthProvider } from '../../providers/auth/auth';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html',
})
export class TabsPage {
    total: number = 0;
    restaurantName: string;

    restaurantParams: {
        id: string;
    }

    restaurantRoot = RestaurantDetailPage;
    menuRoot = MenuPage;
    reviewsRoot = ReviewsPage;

    constructor(
        public restaurantService: RestaurantService,
        public navParams: NavParams,
        public navCtrl: NavController,
        public cartService: CartService,
        public authProvider: AuthProvider,
        public toastCtrl: ToastController,
        public storage: Storage) {

            this.restaurantParams = {
                id: this.navParams.get('id'),  //id recebe o id passado pelo restaurant
            }

            this.restaurantName = this.navParams.get('restaurantName');

        }

        ionViewCanEnter():any {
            return this.authProvider.userIsLogged();
        }

        pushCart(): void {
            this.navCtrl.push(CartPage, {
                'total': this.total
            })
        }

    }
