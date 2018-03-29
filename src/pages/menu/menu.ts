import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { RestaurantService } from '../../providers/restaurant/restaurants.service';
import { CartService } from '../../providers/cart/cart.service';
import { MenuItem } from '../../providers/cart/cart.model';



@IonicPage()
@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html',
})
export class MenuPage {
    menu: MenuItem[];

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public restaurantService: RestaurantService,
        public cartService: CartService,
        public toastCtrl: ToastController,
        public alertCtrl: AlertController) {

            let id = this.navParams.data.restaurantId; //pega o id do restaurante por parametro pela tab
            //this.access = this.navParams.data.access;

            this.restaurantService.restaurantMenu(id)
            .subscribe(menu => this.menu = menu);
        }

        ionViewDidLoad() {
            console.log("Entrou em menu.")
        }

        ionViewWillLeave() {
            console.log("Saiu de menu.")
        }

        showAlert(i){
            let alert = this.alertCtrl.create({
                title: `${this.menu[i].name}`,
                subTitle: `${this.menu[i].description}`,
                message: `R$${this.menu[i].price}0`,
                buttons: [{
                    text: 'Confirmar',
                    handler: () => {
                        this.addCart(i);

                        let toast = this.toastCtrl.create({
                            message: 'Item adicionado no carrinho.',
                            duration: 3000,
                        });
                        toast.present();
                    }
                }
            ]
        });
        alert.setMode("ios");
        alert.present();
    }
    addCart(i) {
        this.cartService.addItem(this.menu[i].price);
    }

}
