import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Put,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AuthJwtGuard } from '../auth/guard/auth.guard';
import { RoleGuard } from 'src/auth/guard/auth.role';
import { Product } from './entities/product.entity';

@Controller('product')
@UseGuards(AuthJwtGuard)
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseGuards(new RoleGuard('admin'))
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Put(':id')
  @UseGuards(new RoleGuard('admin'))
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Get()
  async findProducts(
    @Query('name') name?: string,
    @Query('minPrice') minPrice?: number,
    @Query('maxPrice') maxPrice?: number,
  ): Promise<Product[]> {
    return this.productService.findAll(name, minPrice, maxPrice);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<{message:string}>{
    const productId = +id; // Convert the id to a number
    return this.productService.remove(productId);
  }
}
