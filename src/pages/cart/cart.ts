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
    item: Array<MenuItem> = [];
    items: Array<MenuItem> = [];

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public cartService: CartService,
        public storage: Storage,) {

            this.total = this.cartService.getTotal();
            // this.storage.get('item').then((data) => {
            //     if (data !=null && data != undefined){
            //         let x = JSON.parse(data)
            //         this.item.push(x);
            //         console.log(this.item);
            //         console.log()
            //         //this.cartService.addListCart(this.item);
            //     }
            // });

        }

        deleteItem(id) {
            console.log(this.item[id]);
            this.cartService.deleteItem(id);
            this.total = this.cartService.getTotal();
        }

        clearCart() {
            this.cartService.clear();
            this.total = this.cartService.getTotal();
        }


    }
