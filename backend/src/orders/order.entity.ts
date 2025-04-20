import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  productId!: number;

  @Column()
  buyer!: string;

  @Column()
  quantity!: number;

  @CreateDateColumn()
  createdAt!: Date;
}
