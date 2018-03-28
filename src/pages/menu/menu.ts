import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RestaurantsPage } from '../restaurants/restaurants';
import { RestaurantService } from '../restaurants/restaurant/restaurants.service';
import { CartPage } from '../cart/cart';


@IonicPage()
@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html',
})
export class MenuPage {
    menu: Array<any>;
    total: number = 0;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public restaurantService: RestaurantService,
        public toastCtrl: ToastController) {

            //let id = this.navParams.data.restaurantId; //pega o id do restaurante por parametro pela tab

            this.restaurantService.restaurantMenu(this.navParams.data.restaurantId)
            .subscribe(menu => this.menu = menu);
        }

        ionViewDidLoad() {
            console.log("Entrou em menu.")
        }

        ionViewWillLeave() {
            console.log("Saiu de menu.")
        }

        pushHome(): void {
            this.navCtrl.setRoot(RestaurantsPage);
        }

        pushCart(): void {
            this.navCtrl.push(CartPage, {
                'total': this.total,
            });
        }

        addCart(prince) {
            this.total = this.restaurantService.addItem(prince);
            console.log(this.total);

            let toast = this.toastCtrl.create({
                message: 'Item adicionado no carrinho.',
                duration: 3000,
            });
            toast.present();
        };
    }
