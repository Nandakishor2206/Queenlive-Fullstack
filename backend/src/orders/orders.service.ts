// src/orders/orders.service.ts
import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  private orders: CreateOrderDto[] = []; // Define the orders array with the type CreateOrderDto[]

  createOrder(createOrderDto: CreateOrderDto) {
    const newOrder = {
      id: Date.now(), // Unique order ID based on the timestamp
      ...createOrderDto,
      status: 'pending', // Set initial order status as 'pending'
    };
    this.orders.push(newOrder); // Now TypeScript knows what the orders array holds
    return newOrder; // Return the created order
  }

  getOrders() {
    return this.orders; // Return all orders
  }
}
