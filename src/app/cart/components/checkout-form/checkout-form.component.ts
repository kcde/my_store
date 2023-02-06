import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent {
  fullName: string = '';
  address: string = '';
  card!: number;
  @Input() total!: string;

  constructor(private cartService: CartService, private router: Router) {}

  onSubmit(form: NgForm): void {
    this.cartService.purchaseCart({ name: this.fullName, amount: this.total });
    form.reset();

    this.router.navigate(['order-success']);
  }
}
