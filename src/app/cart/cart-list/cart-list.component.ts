import { Component, OnInit } from '@angular/core';
import { Cart, CartPayload } from 'src/app/models/cart.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  cart: Cart[] = [];

  constructor(private cartServices: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartServices.getCart();
  }
}
