import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: string[] = [];

  constructor(private cartService: CartService) {}

  getTelefono() {
    this.products = this.cartService.getTelefonos();
  }
  ngOnInit() {
    this.getTelefono()
  }
}