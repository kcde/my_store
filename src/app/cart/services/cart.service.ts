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

  private _cartTotalSource = new Subject<number>();
  cartTotal$ = this._cartTotalSource.asObservable();

  constructor(private productService: ProductsService) {}

  getCart() {
    return this.cart;
  }

  addToCart(payload: CartPayload) {
    this.productService.getProducts().subscribe((data) => {
      let newCartItem!: Cart;
      let product = data.find((el) => el.id == payload.id);

      if (product != undefined) {
        newCartItem = { ...product, amount: payload.amount };

        const productIndex = this.cart.findIndex((el) => el.id == payload.id);

        //if product with iD already exists in card
        if (productIndex != -1) {
          //update product ammount
          this.cart[productIndex].amount += payload.amount;

          //update cart total
          const newCartTotal: number = this.cart.reduce(
            (a, b) => a + b.price * b.amount,
            0
          );
          this._cartTotalSource.next(newCartTotal);
        } else {
          //add new product to cart
          this.cart.push(newCartItem);
          //emit the length of cart
          this._cartCountSource.next(this.cart.length);
        }
      }
    });
  }

  updateCartItem(id: number, amount: number) {
    const itemIndex = this.cart.findIndex((el) => el.id == id);

    if (itemIndex != -1) {
      this.cart[itemIndex].amount = amount;

      //update cart total
      const newCartTotal: number = this.cart.reduce(
        (a, b) => a + b.price * b.amount,
        0
      );
      this._cartTotalSource.next(newCartTotal);
    }
  }
}
