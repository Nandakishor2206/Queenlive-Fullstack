// src/orders/dto/create-order.dto.ts
export class CreateOrderDto {
  productId: number;  // The ID of the product being ordered
  quantity: number;   // The quantity of the product being ordered

  // Optionally you can add a constructor to ensure type safety
  constructor(productId: number, quantity: number) {
    this.productId = productId;
    this.quantity = quantity;
  }
}

