import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RestaurantsPage } from '../restaurants/restaurants';
import { RestaurantService } from '../../providers/restaurant/restaurants.service';
import { CartService } from '../../providers/cart/cart.service';
import { MenuItem } from '../../providers/cart/cart.model';
import { CartPage } from '../cart/cart';


@IonicPage()
@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html',
})
export class MenuPage {
    menu: MenuItem;
    //access: boolean = false;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public restaurantService: RestaurantService,
        public cartService: CartService,
        public toastCtrl: ToastController) {

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

        pushHome(): void {
            this.navCtrl.setRoot(RestaurantsPage);
        }


        addCart(i): void  {
            this.cartService.addItem(this.menu[i].price);

            let toast = this.toastCtrl.create({
                message: 'Item adicionado no carrinho.',
                duration: 3000,
            });
            toast.present();
        };

        pushCart(): void{
            this.navCtrl.push(CartPage);
        }

        /*
        ionViewCanEnter() {
        if(!this.access){
        this.navCtrl.setRoot(WelcomePage);
        return false
    }else{
    return true;
}
}
*/
}
