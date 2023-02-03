import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { CartPayload } from 'src/app/models/cart.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  constructor(private cartService: CartService) {}
  @Input() image!: string;
  @Input() name!: string;
  @Input() price!: number;
  @Input() id!: number;

  addToCart(payload: CartPayload) {
    console.log(payload);

    this.cartService.addToCart(payload);
  }
}
