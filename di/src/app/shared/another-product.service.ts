import { Injectable } from '@angular/core';
import {Product, ProductService} from "./product.service";

@Injectable()
export class AnotherProductService implements ProductService{

  constructor() { }

  getProduct(): Product {
    return new Product(1, "华为P20", 3899, "最新款华为手机");
  }
}
