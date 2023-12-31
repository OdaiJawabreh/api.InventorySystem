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
import {UserRole} from "../../shared/enum"

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  
  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.Member, 
  })
  role: UserRole;

  @OneToMany(() => Transaction, (transaction) => transaction.user)
  transactions: Transaction[];
}
