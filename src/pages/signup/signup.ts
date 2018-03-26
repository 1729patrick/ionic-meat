import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestaurantsPage } from '../restaurants/restaurants';


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
            console.log('ionViewDidLoad SignupPage');
        }

        onSignUp(): void{
            console.log(this.signUpForm.value);
            let alert = this.alertCtrl.create({
                title: 'Bem-vindo ao Meat!',
                buttons: ['Ok']
            });
            alert.present();
            this.navCtrl.setRoot(RestaurantsPage);
        }

    }
