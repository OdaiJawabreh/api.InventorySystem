// transaction.dto.ts
import { IsArray, IsDecimal, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTransactionDto {
  @IsArray()
  @IsNotEmpty()
  products: number[]; // An array of product IDs

  @IsDecimal({ decimal_digits: '2', force_decimal: true })
  @IsNotEmpty()
  @IsNumber()
  totalAmount: number;
}
