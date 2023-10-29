import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [],
})
export class DashboardComponent {
  constructor(private productsService: ProductsService) {}
  get products() {
    return this.productsService.products;
  }
}
