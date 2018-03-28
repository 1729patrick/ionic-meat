import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantService } from '../restaurants/restaurant/restaurants.service';


@IonicPage()
@Component({
    selector: 'page-review-detail',
    templateUrl: 'review-detail.html',
})
export class ReviewDetailPage {
    reviews: Array<any>;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public restaurantService: RestaurantService) {

            this.reviews = this.navParams.get('reviewParams');
            //console.log(this.reviews)
        }

        ionViewDidLoad() {
            console.log("Entrou em Detalhes.")
        }

        ionViewWillLeave() {
            console.log("Entrou de Detalhes.")
        }
    }
