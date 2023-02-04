import { Component, Input } from '@angular/core';
import { Cart, CartPayload } from 'src/app/models/cart.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() item!: Cart;

  constructor(private cartService: CartService) {}

  updateAmount(amount: number) {
    this.cartService.updateCartItem(this.item.id, amount);
  }
}
