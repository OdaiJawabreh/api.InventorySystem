// user.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
} from 'typeorm';
import { Product } from '../../product/entities/product.entity';
import { Transaction } from '../../transaction/entities/transaction.entity';

export enum UserRole {
  Member = 'member',
  Admin = 'admin',
}

@Entity()
@Unique(['username'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  
  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.Member, 
  })
  role: UserRole;

  @OneToMany(() => Product, (product) => product.user)
  products: Product[];

  @OneToMany(() => Transaction, (transaction) => transaction.user)
  transactions: Transaction[];
}
