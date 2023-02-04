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
  cartTotal: Number = 0;

  isCartEmpty!: boolean;

  constructor(private cartServices: CartService) {}

  ngOnInit(): void {
    this.isCartEmpty = this.cart.length < 1;

    this.cart = this.cartServices.getCart();
    this.cartTotal = this.cart.reduce((a, b) => a + b.price * b.amount, 0);

    this.cartServices.cartTotal$.subscribe((data) => {
      this.cartTotal = data;
    });
  }
}
