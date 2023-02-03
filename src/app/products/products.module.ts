import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ButtonComponent } from './button/button.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ButtonComponent,
    ProductDetailsComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class ProductsModule {}
