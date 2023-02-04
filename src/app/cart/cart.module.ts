import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [CartListComponent, CartItemComponent, CheckoutFormComponent],
  imports: [CommonModule, FormsModule, RouterModule, ComponentsModule],
})
export class CartModule {}
