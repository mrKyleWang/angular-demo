import {Component, inject, Injector, OnInit} from '@angular/core';
import {Product, ProductService} from "../shared/product.service";

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css'],
})
export class Product2Component implements OnInit {

  product: Product;

  private productService: ProductService;

  constructor(private injector: Injector) {
    this.productService = injector.get(ProductService);
  }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
