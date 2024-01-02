import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { Product } from '../product/entities/product.entity';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction,Product])],
  controllers: [TransactionController],
  providers: [TransactionService, JwtService],
})
export class TransactionModule {}
