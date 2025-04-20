// src/orders/orders.module.ts
import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';

@Module({
  controllers: [OrdersController],  // Register the controller
  providers: [OrdersService],       // Register the service
})
export class OrdersModule {}
