import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RestaurantsPage } from '../restaurants/restaurants';
import { RestaurantService } from '../../providers/restaurant/restaurants.service';
import { Restaurant } from'../../providers/restaurant/restaurant.model';
import { CartPage } from '../cart/cart';


@IonicPage()
@Component({
    selector: 'page-reviews',
    templateUrl: 'reviews.html',
})
export class ReviewsPage {
    restaurant: Restaurant;
    reviews: {
        name: string,
        comments: string,
        rating: string
    };
    total: number = 0;


    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public restaurantService: RestaurantService,
        public alertCtrl: AlertController) {

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

        showAlert(i){
            let alert = this.alertCtrl.create({
                title: `Avaliação de ${this.reviews[i].name}!`,
                subTitle: `${this.reviews[i].comments}`,
                buttons: ['OK']
            });
            alert.setMode("ios");
            alert.present();
        }

        pushCart(): void{
            this.navCtrl.push(CartPage, {
                'total': this.total
            })
        }

    }
