import { AuthProvider } from '../../providers/auth/auth';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationProvider } from '../../providers/notification/notification';
import { NavController, NavParams, ToastController, IonicPage } from 'ionic-angular';
import { RestaurantsPage } from '../restaurants/restaurants';
import { WelcomePage } from '../welcome/welcome';
import { SignupPage } from '../signup/signup';


@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    loginForm: FormGroup;

    constructor(
        public authProvider: AuthProvider,
        public formBuilder: FormBuilder,
        public navCtrl: NavController,
        public navParams: NavParams,
        public notificationProvider: NotificationProvider,
        public toastCtrl: ToastController) {

            this.loginForm = this.formBuilder.group({    //VALIDACAO DOS CAMPOS DE LOGIN
                email: this.formBuilder.control('', [Validators.required, Validators.email]),
                password: this.formBuilder.control('', [Validators.required]),
            })

        }

        login(): void {
            if(this.loginForm.valid){

                this.authProvider.login(this.loginForm.value.email, this.loginForm.value.password);

                //this.navCtrl.setRoot(RestaurantsPage);


            } else {
                this.notificationProvider.messageDefault(`Dados inválidos.`);//mensagem de dados inválido
            }
        }

        pushHome(): void {
            this.navCtrl.setRoot(WelcomePage);
        }

        pushSignUp(): void {
            this.navCtrl.setRoot(SignupPage);
        }


    }
