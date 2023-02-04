import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ComponentsModule],
})
export class ProductsModule {}
