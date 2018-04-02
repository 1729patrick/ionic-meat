import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { API } from '../../app/app.api';
import { Restaurant } from './restaurant.model';
import { MenuItem } from '../cart/cart.model';

@Injectable()
export class RestaurantService {

    constructor(
        public httpClient: HttpClient,
    ){  }

    showRestaurants(): Observable<Restaurant[]> {
        return this.httpClient.get<Restaurant[]>(`${API}/restaurants`); //para pegar todos os dados json de http://localhost:3000/restaurants
    }

    restaurantById(id: string): Observable<Restaurant> {
        return this.httpClient.get<Restaurant>(`${API}/restaurants/${id}`)
    }

    restaurantReviews(id: string): Observable<any>{ //para ir ao caminho reviws aopos clicar em algum restaurante
        return this.httpClient.get(`${API}/restaurants/${id}/reviews`);
    }

    newReview(id, review) {
        this.httpClient.post(`${API}/restaurants/${id}/reviews`, review)
        .subscribe(data => {
            console.log(data);
        })
    }

    restaurantMenu(id: string): Observable<MenuItem[]>{
        return this.httpClient.get<MenuItem[]>(`${API}/restaurants/${id}/menu`);
    }

}
