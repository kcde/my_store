import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { OrderSuccessComponent } from './order-success/order-success.component';

@NgModule({
  declarations: [ButtonComponent, OrderSuccessComponent],
  imports: [CommonModule],
  exports: [ButtonComponent],
})
export class ComponentsModule {}
