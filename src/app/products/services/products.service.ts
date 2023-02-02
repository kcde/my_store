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

  getProduct(id: number): Product | undefined {
    const product = this.products.find((el) => el.id == id);

    return product;
  }
}
