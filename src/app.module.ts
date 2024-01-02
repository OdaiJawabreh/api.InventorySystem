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
import { ConfigModule } from '@nestjs/config';

dotenv.config();
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql12.freesqldatabase.com',
      port: 3306,
      username: 'sql12674265',
      password: 'T8hwxpVd1y',
      database: 'sql12674265',
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
