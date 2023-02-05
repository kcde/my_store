import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent {
  fullName: string = '';
  address: string = '';
  card!: number;

  onSubmit(form: NgForm): void {
    form.reset();
  }
}
