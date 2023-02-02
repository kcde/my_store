import { Injectable } from '@angular/core';
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

    //!TODO Use hhtpClient to fetch the data
    return this.http.get<Product[]>(jsonURL);
  }

  getProduct(id: number): Product | undefined {
    const product = this.products.find((el) => el.id == id);

    return product;
  }
}
