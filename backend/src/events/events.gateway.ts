import { Injectable, OnModuleInit } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../orders/order.entity';
import { getSocketIO } from '../socket.io'; // import Socket helper

@Injectable()
export class EventsGateway implements OnModuleInit {
  server!: Server; // Non-null assertion

  onModuleInit() {
    // Now you can safely assign `server` here
    this.server = getSocketIO();
  }

  // Add your methods to handle socket events
}

