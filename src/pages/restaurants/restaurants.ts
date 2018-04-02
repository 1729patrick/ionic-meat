import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Restaurant } from'../../providers/restaurant/restaurant.model';
import { RestaurantService } from '../../providers/restaurant/restaurants.service';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';


@IonicPage()
@Component({
    selector: 'page-restaurants',
    templateUrl: 'restaurants.html',
})
export class RestaurantsPage {
    restaurants: Restaurant[]; //variavel restaurants do tipo Restaurant de restaurant.model


    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public restaurantService: RestaurantService,
        public authProvider: AuthProvider,
        public toastCtrl: ToastController) {
            this.restaurantService.showRestaurants()
            .subscribe(restaurants =>  this.restaurants = restaurants); //para pegar os valor do arquivo json e salvar na variavel restaurants
        }

        restaurantDetail(id, name): void {
            this.navCtrl.push(TabsPage, {
                'id': id,
                'restaurantName': name
            });

            if (!this.authProvider.userIsLogged()){
                let toast = this.toastCtrl.create({
                    message: 'Realize o login para acessar o menu.',
                    duration: 3000,
                });
                toast.present();

            }
        }

        pushLogin(): void {
            this.navCtrl.setRoot(LoginPage)
        }

    }
