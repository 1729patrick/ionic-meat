import { API } from '../../app/app.api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotificationProvider } from '../notification/notification';
import { Storage } from '@ionic/storage';


@Injectable()
export class AuthProvider {
    logged: boolean = false;

    constructor(
        public httpClient: HttpClient,
        public notificationProvider: NotificationProvider,
        public storage: Storage) {  }

        //TOKEN NO LOCAL STORAGE
        login(credential) {
        // this.httpClient.post(`${API}/login`, credential)
        // .subscribe(data => {
        this.storage.set('token', credential.password);
        // });
    }

    createAccount(credentials){
        this.httpClient.post(`${API}/users`, credentials)
        .subscribe(data => {
            console.log(data)
        });
    }

    
    //VERIFICA SE O USUÁRIO ESTÁ LOGADO
    userIsLogged() {
    return this.storage.get('token').then(data => {
        if (data){
            return data;
        }else {
            this.notificationProvider.messageAuth(); //mostra a mensagem para realizar o login
            return false;
        }
    });
}

logout() {
    this.storage.remove('token');
}

}
