import { Controller, Post, Body, InternalServerErrorException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    try {
      return  this.userService.create(createUserDto);
    } catch (error) {
      throw new InternalServerErrorException('Internal Server Error', error);
    }
  }
}
