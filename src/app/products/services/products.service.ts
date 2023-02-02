import { Injectable, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  products: Product[] = [];

  getProducts(): Observable<Product[]> {
    const jsonURL = '../../../assets/data.json';
    return this.http.get<Product[]>(jsonURL);
  }
}
