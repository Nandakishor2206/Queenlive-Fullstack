// src/app.module.ts
import { Module } from '@nestjs/common';
import { ProductModule } from './products/product.module';
import { OrdersModule } from './orders/orders.module';  // Import OrdersModule

@Module({
  imports: [ProductModule, OrdersModule],  // Include OrdersModule
})
export class AppModule {}
