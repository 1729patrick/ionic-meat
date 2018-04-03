import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartService } from '../../providers/cart/cart.service';
import { Storage } from '@ionic/storage';
import { MenuItem } from '../../providers/cart/cart.model';

@IonicPage()
@Component({
    selector: 'page-cart',
    templateUrl: 'cart.html',
})
export class CartPage {
    total: number;
    items: MenuItem[] = [];

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public cartService: CartService,
        public storage: Storage,) {
            this.total = this.cartService.getTotal();
            this.items = this.cartService.item;
        }

        deleteItem(id) {
            this.cartService.deleteItem(id);
            this.total = this.cartService.getTotal();
        }

        clearCart() {
            this.cartService.clear();
            this.total = this.cartService.getTotal();
        }


    }
