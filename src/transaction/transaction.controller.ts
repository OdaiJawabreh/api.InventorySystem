import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';
import { AuthJwtGuard } from '../auth/guard/auth.guard';

@UseGuards(AuthJwtGuard)
@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  async createTransaction(@Body() createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    return this.transactionService.createTransaction(createTransactionDto);
  }

  @Get(":userId")
  findAll(@Param('userId') userId: any) :Promise<Transaction[]>{
    return this.transactionService.findAll(userId);
  }


}
