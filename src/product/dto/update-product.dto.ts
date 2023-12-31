
import { IsNumber, IsString, IsInt, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto {
  @ApiProperty({
    example: 'Mr. Chips',
    description: 'Product Name',
  })
  @IsOptional()
  @IsString()
  readonly name: string;

  @ApiProperty({
    example: 20.99,
    description: 'Price for quantity',
  })
  @IsOptional()
  @IsNumber()
  readonly price: number;

  @ApiProperty({
    example: 9,
    description: 'Remaining Quantity of Product',
  })
  @IsOptional()
  @IsInt()
  readonly stockQuantity: number;
}

