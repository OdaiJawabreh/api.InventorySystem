
import { IsNumber, IsString, IsInt, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FilterProductDto {
  @ApiProperty({
    example: 'Mr. Chips',
    description: 'Product Name',
  })
  @IsOptional()
  @IsString()
  readonly name: string;

  @ApiProperty({
    example: 10,
    description: 'Price Range From',
  })
  @IsOptional()
  @IsNumber()
  readonly minPrice: number;

  @ApiProperty({
    example: 100,
    description: 'Price Range To',
  })
  @IsOptional()
  @IsInt()
  readonly maxPrice: number;
}

