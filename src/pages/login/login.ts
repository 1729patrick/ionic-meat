import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignupPage } from '../signup/signup';
import { WelcomePage } from '../welcome/welcome';
import { AuthProvider } from '../../providers/auth/auth';
import { RestaurantsPage } from '../restaurants/restaurants';



@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    loginForm: FormGroup;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public formBuilder: FormBuilder,
        public authService: AuthProvider,
        public toastCtrl: ToastController) {

            this.loginForm = this.formBuilder.group({
                username: this.formBuilder.control('', [Validators.required]),
                password: this.formBuilder.control('', [Validators.required]),
            })
        }

        ionViewDidLoad() {
            console.log("Entrou em login.")
        }

        ionViewWillLeave() {
            console.log("Saiu de login.")
        }

        login(): void {
            this.authService.login(this.loginForm.value);
            this.navCtrl.setRoot(RestaurantsPage);

            let toast = this.toastCtrl.create({
                message: `Olá ${this.loginForm.value.username}, bem-vindo.`,
                duration: 3000,
            });
            toast.present();
        }

        pushSignUp(): void {
            this.navCtrl.setRoot(SignupPage);
        }

        pushHome(): void {
            this.navCtrl.setRoot(WelcomePage);
        }


    }
