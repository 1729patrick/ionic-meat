import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { API } from '../../app/app.api';
// import { RequestOptions, Request, Headers} from '@angular/http';


@Injectable()
export class AuthProvider {

    constructor(
        public httpClient: HttpClient,
        public storage: Storage) {  }

        login(credential) {
            // let headers = new Headers();
            // headers.append('Content-Type', 'application/json');
            //
            // let options = new RequestOptions({ headers: headers });

            this.httpClient.post(`${API}/login`, credential)
            .subscribe(data => {
                this.storage.set('token', data)
            });
        }

        userIsLogged() {
            return this.storage.get('token').then(data => {
                if (data == undefined){
                    //console.log(data.value)
                    return false;
                }else {
                    //    console.log(data)
                    return true;
                }
            });
        }

        logout() {
            this.storage.remove('token');
        }

    }
