import {Injectable} from '@angular/core';
import {Product, ProductService} from "./product.service";
import {LoggerService} from "./logger.service";

@Injectable()
export class AnotherProductService implements ProductService {

  constructor(public logger: LoggerService) {
  }

  getProduct(): Product {
    this.logger.log("AnotherProductService.getProduct()方法被调用");
    return new Product(1, "华为P20", 3899, "最新款华为手机");
  }
}
