import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { RestaurantService } from '../../providers/restaurant/restaurants.service';
import { CartService } from '../../providers/cart/cart.service';
import { MenuItem } from '../../providers/cart/cart.model';

import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';


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
        public alertCtrl: AlertController,
        public storage: Storage,
        public httpClient: HttpClient) {

            let id = this.navParams.data.id; //pega o id do restaurante por parametro pela tab
            //this.access = this.navParams.data.access;

            this.restaurantService.restaurantMenu(id)
            .subscribe(menu => this.menu = menu);
        }

        confirmAdd(i): void {
            let alert = this.alertCtrl.create({
                title: `${this.menu[i].name}`,
                subTitle: `${this.menu[i].description}`,
                message: `R$${this.menu[i].price}0`,
                buttons: [{
                    text: 'Confirmar',
                    handler: () => {
                        this.addCart(i);


                        let toast = this.toastCtrl.create({
                            message: `${this.menu[i].name} adicionado no carrinho.`,
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


    addCart(id):void {
        // this.storage.set('item', JSON.stringify(this.menu[id]));
        this.cartService.addItem(this.menu[id]);
    }

}
