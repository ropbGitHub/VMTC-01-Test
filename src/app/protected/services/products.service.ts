import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/interface.protected';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private serviceUrl: string = 'https://fakestoreapi.com/products';
  public products: Product[] = [];
  constructor(private http: HttpClient) {}
  showProducts() {
    const params = new HttpParams().set('limit', '10');
    this.http
      .get<Product>(`${this.serviceUrl}/`, { params })
      .subscribe((items) => {
        // this.products = items;
        localStorage.setItem('products', JSON.stringify(this.products));
      });
  }
}
