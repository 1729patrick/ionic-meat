import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class CartService {
    total: number = 0;
    quantity: number

    constructor(public httpClient: HttpClient) {  }

    clear(): void {
        this.total = 0;
    }

    addItem(price): void {
        this.quantity++;
        this.total += price;
    }

    getTotal(): number {
        return this.total;
    }

}
