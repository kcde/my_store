import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart, CartPayload } from 'src/app/models/cart.model';
import { ProductsService } from 'src/app/products/services/products.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Cart[] = [];

  private _cartCountSource = new Subject<number>();
  cartCount$ = this._cartCountSource.asObservable();

  constructor(private productService: ProductsService) {}

  getCart() {
    return this.cart;
  }

  addToCart(payload: CartPayload) {
    this.productService.getProducts().subscribe((data) => {
      let newCartItem!: Cart;
      let product = data.find((el) => (el.id = payload.id));
      if (product != undefined) {
        newCartItem = { ...product, amount: payload.amount };
        this.cart.push(newCartItem);
        //emit the length of cart
        this._cartCountSource.next(this.cart.length);
      }
    });
  }
}
