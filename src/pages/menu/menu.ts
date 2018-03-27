import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantsPage } from '../restaurants/restaurants';
import { RestaurantService } from '../restaurants/restaurant/restaurants.service';


@IonicPage()
@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html',
})
export class MenuPage {
    menu: Array<any>;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public restaurantService: RestaurantService) {
            
            //let id = this.navParams.data.restaurantId; //pega o id do restaurante por parametro pela tab

            this.restaurantService.restaurantMenu(this.navParams.data.restaurantId)
            .subscribe(menu => this.menu = menu);
        }

        ionViewDidLoad(){
            console.log("Entrou em menu.")
        }

        ionViewWillLeave(){
            console.log("Saiu de menu.")
        }

        pushHome(): void{
            this.navCtrl.setRoot(RestaurantsPage);
        }


    }
