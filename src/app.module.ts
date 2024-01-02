import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { TransactionModule } from './transaction/transaction.module';
import * as dotenv from 'dotenv';
import { User } from './user/entities/user.entity';
import { Product } from './product/entities/product.entity';
import { Transaction } from './transaction/entities/transaction.entity';

dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '0000',
      database: 'InventorySystem',
      entities: [User,Product,Transaction],
      synchronize: false,
    }),

    AuthModule,
    UserModule,
    ProductModule,
    TransactionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
