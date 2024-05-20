import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
    console.log("marca de telefones")
   }
   getTelefonos() {
    return ['sansung', 'xaomi', 'Iphone']
   }
}

