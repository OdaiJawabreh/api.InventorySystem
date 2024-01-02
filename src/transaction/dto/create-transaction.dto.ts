// transaction.dto.ts
import { IsArray, IsNotEmpty, IsNumber, IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTransactionDto {
    @ApiProperty({
        example: [1,2],
        description: 'Product Ids',
      })
  // @IsArray()
  // @IsNotEmpty()
  // products: number[]; // An array of product IDs
products: any
  @ApiProperty({
    example: 30,
    description: 'Total Amount',
  })
  @IsNotEmpty()
  @IsNumber()
  totalAmount: number;

  @ApiProperty({
    example: 1,
    description: 'userId',
  })
  @IsNumber()
  @IsInt()
  @Min(1)
  userId: number;
}
