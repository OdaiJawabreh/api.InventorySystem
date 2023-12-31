import { Controller, Post, Body, InternalServerErrorException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    const { password } = createUserDto;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const userDTO = {
      ...createUserDto,
      password: hashedPassword,
    };
    try {
      const user = await this.userService.create(userDTO);
      return user;
    } catch (error) {
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}
