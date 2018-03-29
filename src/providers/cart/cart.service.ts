import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CartService {
    total: number = 0;
    quantity: number = 0;


    constructor(public httpClient: HttpClient) {  }

    clear(): void {
        this.total = 0;
    }

    addItem(price): void {
        this.quantity++;
        this.total += price;
        this.getQuantity();
    }

    addCartItems(): void  {

    }

    getTotal(): number {
        return this.total;
    }

    getQuantity(): number{
        return this.total;
    }

}
