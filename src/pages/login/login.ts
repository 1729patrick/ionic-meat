import { AuthProvider } from '../../providers/auth/auth';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationProvider } from '../../providers/notification/notification';
import { NavController, NavParams, ToastController, IonicPage } from 'ionic-angular';
import { RestaurantsPage } from '../restaurants/restaurants';
import { WelcomePage } from '../welcome/welcome';

import { OrderSummaryPage } from '../order-summary/order-summary';



@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    loginForm: FormGroup;

    constructor(
        public authService: AuthProvider,
        public formBuilder: FormBuilder,
        public navCtrl: NavController,
        public navParams: NavParams,
        public notificationProvider: NotificationProvider,
        public toastCtrl: ToastController) {

            //VALIDACAO DOS CAMPOS DE LOGIN
            this.loginForm = this.formBuilder.group({
            email: this.formBuilder.control('', [Validators.required, Validators.email]),
            password: this.formBuilder.control('', [Validators.required]),
        })
    }

    login(): void {
        if(this.loginForm.valid){
            this.authService.login(this.loginForm.value);
            this.navCtrl.setRoot(RestaurantsPage);

            this.notificationProvider.welcomeLogin(this.loginForm.value);//mensagem de bem vindo
        } else{
            this.notificationProvider.credentialIncorrect();//mensagem de dados inválidos
        }



    }

    pushHome(): void {
        this.navCtrl.setRoot(OrderSummaryPage);
    }


}
