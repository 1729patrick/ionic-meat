import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignupPage } from '../signup/signup';
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
        public formBuilder: FormBuilder
    ) {
        this.loginForm = this.formBuilder.group({
            username: this.formBuilder.control('', [Validators.required]),
            password: this.formBuilder.control('', [Validators.required]),

        })
    }


    onLogin(): void{
        console.log(this.loginForm.value);
        this.navCtrl.setRoot(RestaurantsPage);
    }

    pushSignUp(): void{
        this.navCtrl.setRoot(SignupPage)
    }

}
