import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import data from '../../../assets/data.json';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  products: Product[] = data;

  getProducts(): Product[] {
    return this.products;
  }
}
