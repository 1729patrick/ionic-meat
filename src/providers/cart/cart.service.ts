import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuItem } from './cart.model';


@Injectable()
export class CartService {
    total: number = 0;
    item: MenuItem[] = [];


    constructor(public httpClient: HttpClient) {  }

    clear(): void {
        this.item = [];
        this.total = 0;
        this.getTotal();
    }

    deleteItem(i) {
        this.total -= this.item[i].price;
        this.item.splice(i, 1);
        this.getTotal();
    }

    addItem(item): void {
        this.item.push(item);
        this.total += item.price;
        this.getTotal();
    }

    getTotal(): number {
        return this.total;
    }



}
