import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { API } from '../../../app/app.api'
import { Restaurant } from './restaurant.model';

@Injectable()
export class RestaurantService {


    constructor(
        public httpClient: HttpClient,
    ){  }

    showRestaurants(): Observable<Restaurant[]> {
        return this.httpClient.get<Restaurant[]>(`${API}/restaurants`); //para pegar todos os dados json de http://localhost:3000/restaurants

    }

}
