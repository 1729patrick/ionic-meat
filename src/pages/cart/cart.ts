import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-cart',
    templateUrl: 'cart.html',
})
export class CartPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log("Entrou em carrinho.")
    }

    ionViewWillLeave() {
        console.log("Saiu de carrinho.")
    }

    total: number = this.navParams.get('total')

}
