import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity';
import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

  ) {}

  async createTransaction(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    // Extract data from the DTO
    const { products, userId, totalAmount } = createTransactionDto;
  
    const newTransaction = new Transaction();
    newTransaction.totalAmount = totalAmount;
    newTransaction.user = { id: userId } as User;
    newTransaction.products = products;
    const savedTransaction = await this.transactionRepository.save(newTransaction);
    // now i want to update the stock
    for (let i = 0; i < products.length; i++) {
      const productEntity = products[i]
      productEntity.stockQuantity -= 1; 
      await this.productRepository.save(productEntity);
    }

  
    return savedTransaction;
  }
  
  findAll() {
    return `This action returns all transaction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }



  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
