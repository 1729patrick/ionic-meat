import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class CartService {
    total: number = 0;
    item: Array<any> = [];


    constructor(public httpClient: HttpClient) {  }

    clear(): void {
        this.item = [];
    }

    deleteItem(i) {
        this.item.splice(i, 1);
    //    this.total -= this.item[i].price;
        console.log(i)
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
