import { ConflictException, Injectable, OnModuleInit } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserRole } from 'src/shared/enum';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async onModuleInit() {
    // Check if an admin user with the specified email and name exists
    const adminUserExists = await this.usersRepository.findOne({
      where: { role: UserRole.Admin },
    });
    const meberUserExists = await this.usersRepository.findOne({
      where: { role: UserRole.Member },
    });

    // If no admin user exists, create one
    if (!adminUserExists) {
      const adminUserDto = {
        email: 'admin@nard.go',
        name: 'admin',
        role: UserRole.Admin,
        password: '1234567',
      };

      // Create the admin user
      await this.create(adminUserDto);
    }
    // If no mebeber user exists, create one
    if (!meberUserExists) {
      const memberUserDto = {
        email: 'member@nard.go',
        name: 'member',
        role: UserRole.Member,
        password: '1234567',
      };

      // Create the admin user
      await this.create(memberUserDto);
    }
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { password, email } = createUserDto;

    const existingUser = await this.findUserByEmail(email);

    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const userDTO = {
      ...createUserDto,
      password: hashedPassword,
    };
    return this.usersRepository.save(userDTO);
  }

  async findUserByEmail(email: string): Promise<User> {
    return await this.usersRepository.findOne({
      where: { email },
    });
  }
}
