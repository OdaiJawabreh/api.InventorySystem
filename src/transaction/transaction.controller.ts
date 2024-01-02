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

  @Get()
  findAll() {
    return this.transactionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionService.findOne(+id);
  }



  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionService.remove(+id);
  }
}
