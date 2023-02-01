import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [ProductComponent, ProductListComponent, ButtonComponent],
  imports: [CommonModule],
})
export class ProductsModule {}
