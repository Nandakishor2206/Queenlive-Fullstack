import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')  // Define the route to handle requests to /products
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()  // Handle GET requests to /products
  getAllProducts() {
    return this.productService.findAll();
  }
}

