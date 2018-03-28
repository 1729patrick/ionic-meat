import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestaurantsPage } from '../restaurants/restaurants';
import { WelcomePage } from '../welcome/welcome';


@IonicPage()
@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html',
})
export class SignupPage {
    signUpForm: FormGroup;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public formBuilder: FormBuilder,
        public alertCtrl: AlertController) {

            this.signUpForm = this.formBuilder.group({
                name: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
                password: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
                confirmPassword: this.formBuilder.control('', [Validators.required, Validators.minLength(3)])
            })
        }

        ionViewDidLoad() {
            console.log("Entrou em SignUp.");
        }

        ionViewWillLeave() {
            console.log("Saiu de SignUp.");
        }

        onSignUp(): void {
            this.navCtrl.setRoot(RestaurantsPage);
        }

        pushHome(): void {
            this.navCtrl.setRoot(WelcomePage);
        }

    }
