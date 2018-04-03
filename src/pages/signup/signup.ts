import { AuthProvider } from '../../providers/auth/auth';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage } from 'ionic-angular';
import { NotificationProvider } from '../../providers/notification/notification';
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
        public authProvider: AuthProvider,
        public navCtrl: NavController,
        public navParams: NavParams,
        public notificationProvider: NotificationProvider,
        public formBuilder: FormBuilder,
        public alertCtrl: AlertController) {

            //VALIDACAO DOS CAMPOS DE NOVA CONTA
            this.signUpForm = this.formBuilder.group({
            name: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
            email: this.formBuilder.control('', [Validators.required, Validators.email]),
            password: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
            confirmPassword: this.formBuilder.control('', [Validators.required, Validators.minLength(3)])
        })
    }

    pushHome(): void {
        this.navCtrl.setRoot(WelcomePage);

    }

    signUp(): void {
        if(this.signUpForm.valid) {
            if(this.signUpForm.value.password == this.signUpForm.value.confirmPassword){
                this.authProvider.createAccount(this.signUpForm.value);//para salvar os dados no db
                this.navCtrl.setRoot(RestaurantsPage);
            }else{
                this.notificationProvider.passwordIncorrect();//mensagem de senhas diferentes
            }

        }else {
            this.notificationProvider.credentialIncorrect();//mensagem de dados inválidos
        }

    }

}
