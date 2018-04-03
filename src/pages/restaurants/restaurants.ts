import { AuthProvider } from '../../providers/auth/auth';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController,IonicPage } from 'ionic-angular';
import { NotificationProvider } from '../../providers/notification/notification';
import { LoginPage } from '../login/login';
import { Restaurant } from'../../providers/restaurant/restaurant.model';
import { RestaurantService } from '../../providers/restaurant/restaurants.service';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
    selector: 'page-restaurants',
    templateUrl: 'restaurants.html',
})
export class RestaurantsPage {
    restaurants: Restaurant[]; //variavel restaurants do tipo Restaurant de restaurant.model

    constructor(
        public authProvider: AuthProvider,
        public navCtrl: NavController,
        public navParams: NavParams,
        public notificationProvider: NotificationProvider,
        public restaurantService: RestaurantService,
        public toastCtrl: ToastController) {

            this.restaurantService.showRestaurants()
            .subscribe(restaurants => {
                this.restaurants = restaurants; //para pegar os valor do arquivo json e salvar na variavel restaurants
            },
            error =>{
                console.log(error);
            }
        );
    }

    restaurantDetail(id, name): void {

        this.navCtrl.push(TabsPage, { //passa o id e o nome do restaurant do restaurante selecionado por parametro para a tab
            'id': id,
            'restaurantName': name
        });
    }

    pushLogin(): void {
        this.navCtrl.setRoot(LoginPage)
    }

    logout(): void {
        this.authProvider.logout();
    }

}
