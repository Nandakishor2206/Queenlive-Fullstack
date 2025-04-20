// src/products/product.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [
    { id: 1, name: 'T-shirt', price: 299 },
    { id: 2, name: 'Shoes', price: 799 },
  ];

  findAll() {
    return this.products;
  }

  create(product: any) {
    this.products.push(product);
    return product;
  }
}
