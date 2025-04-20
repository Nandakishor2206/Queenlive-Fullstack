// src/orders/orders.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto'; // Import CreateOrderDto

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  // Endpoint to create a new order
  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.createOrder(createOrderDto);
  }

  // Endpoint to get all orders
  @Get()
  getOrders() {
    return this.ordersService.getOrders();
  }
}
