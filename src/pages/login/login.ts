import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignupPage } from '../signup/signup';
import { RestaurantsPage } from '../restaurants/restaurants';
import { WelcomePage } from '../welcome/welcome';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    loginForm: FormGroup;
    time: Observable<string>; //Observable /async

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public formBuilder: FormBuilder) {

            this.loginForm = this.formBuilder.group({
                username: this.formBuilder.control('', [Validators.required]),
                password: this.formBuilder.control('', [Validators.required]),
            })
            //Observable /async
            this.time = new Observable<string>((observer: Subscriber<string>) => {
            setInterval(() => observer.next(new Date().toString()), 1000);
        });
        //Observable /async
    }

    ionViewDidLoad() {
        console.log("Entrou em login.")
    }

    ionViewWillLeave() {
        console.log("Saiu de login.")
    }

    onLogin(): void {
        this.navCtrl.setRoot(RestaurantsPage);
    }

    pushSignUp(): void {
        this.navCtrl.setRoot(SignupPage);
    }

    pushHome(): void {
        this.navCtrl.setRoot(WelcomePage);
    }
}
