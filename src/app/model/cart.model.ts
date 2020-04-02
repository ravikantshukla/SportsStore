import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class Cart{}

export class CartLine{
  
  constructor(public product: Product, public quantity : number){}

  getLineTotal():number{
    return this.product.price * this.quantity
  }
}