import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { PurchasedCartDetail } from 'src/app/models/cart.model';
import { CartService } from '../../cart/services/cart.service';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css'],
})
export class OrderSuccessComponent implements OnInit {
  orderDetails!: PurchasedCartDetail;

  constructor(public router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    if (!this.cartService.isCartPurchased) {
      this.router.navigate(['/']);
    }

    this.cartService.resetIsCartPurchased();
    this.orderDetails = this.cartService.getPurchaseDetails();
  }
}
