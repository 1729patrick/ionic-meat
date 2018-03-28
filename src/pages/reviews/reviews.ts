import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantsPage } from '../restaurants/restaurants';
import { RestaurantService } from '../restaurants/restaurant/restaurants.service';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';
import { Observable } from 'rxjs/Observable';
//import { ReviewDetailPage } from '../review-detail/review-detail';
import { CartPage } from '../cart/cart';


@IonicPage()
@Component({
    selector: 'page-reviews',
    templateUrl: 'reviews.html',
})
export class ReviewsPage {
    restaurant: Restaurant;
    reviews: Observable<any>;
    click: boolean;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public restaurantService: RestaurantService) {

            this.restaurantService.restaurantReviews(this.navParams.data.restaurantId)
            .subscribe(reviews => {
                this.reviews = reviews;
            });
        }

        ionViewDidLoad() {
            console.log("Entrou em Reviews.")
        }

        ionViewWillLeave() {
            console.log("Saiu de Reviews.")
        }

        pushHome(): void {
            this.navCtrl.setRoot(RestaurantsPage);
        }

        reviewDetail(): void {
            /*this.navCtrl.push(ReviewDetailPage, {
            'reviewParams': this.reviews[id],
        });*/
        this.click = true;
    }

    pushCart(): void {
        this.navCtrl.push(CartPage);
    }

}
