import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartService } from '../../providers/cart/cart.service';

@IonicPage()
@Component({
    selector: 'page-cart',
    templateUrl: 'cart.html',
})
export class CartPage {
    total: number;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public cartService: CartService) {
            this.total = this.cartService.getTotal();
        }

        ionViewDidLoad() {
            console.log("Entrou em carrinho.");
        }

        ionViewWillLeave() {
            console.log("Saiu de carrinho.");
        }

        clearCart(): void {
            this.cartService.clear();
            this.total = this.cartService.getTotal();
        }

    }
