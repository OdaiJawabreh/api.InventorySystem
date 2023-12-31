import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}
  async create(createProductDto: CreateProductDto): Promise<Product> {
    try {
      return await this.productRepository.save(createProductDto);
    } catch (error) {
      throw new InternalServerErrorException('Error in createProduct:', error);
    }
  }
 async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      const existingProduct = await this.productRepository.findOne({where: { id }});

      if (!existingProduct) {
        throw new NotFoundException(`Product with ID ${id} not found`);
      }

      // Update the product properties
      existingProduct.name = updateProductDto.name || existingProduct.name;
      existingProduct.price = updateProductDto.price || existingProduct.price;
      existingProduct.stockQuantity = updateProductDto.stockQuantity || existingProduct.stockQuantity;

      // Save the updated product to the database
      const updatedProduct = await this.productRepository.save(existingProduct);

      return updatedProduct;
    } catch (error) {
      throw new InternalServerErrorException('Error in UpdateProduct:', error);
    }
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
