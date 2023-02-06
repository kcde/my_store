import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsService } from '../services/products.service';

import { Product } from 'src/app/models/product.model';
import { CartPayload } from 'src/app/models/cart.model';
import { CartService } from 'src/app/cart/services/cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  productId!: number;
  amount: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.productId = param.get('id') as unknown as number;

      this.productService.getProducts().subscribe((data) => {
        this.product = data.find((el) => el.id == this.productId);
      });
    });
  }

  addToCart(payload: CartPayload) {
    this.cartService.addToCart(payload);
  }
}
