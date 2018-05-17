import {Injectable} from '@angular/core';
import {LoggerService} from "./logger.service";

@Injectable()
export class ProductService {

  constructor(public logger: LoggerService) {
  }

  getProduct(): Product {
    this.logger.log("ProductService.getProduct()方法被调用");
    return new Product(0, "iPhoneX", 6899, "最新款苹果手机");
  }
}

export class Product {

  constructor(
    public id: number,
    public title: string,
    public price: number,
    public desc: string
  ) {

  }

}
