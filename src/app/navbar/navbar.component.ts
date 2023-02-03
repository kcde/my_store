import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/services/cart.service';
import { Cart } from '../models/cart.model';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  cartCount: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartCount$.subscribe((data) => {
      this.cartCount = data;
    });
  }
}
