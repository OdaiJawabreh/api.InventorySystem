// create-user.dto.ts

import { IsEmail, IsString, IsEnum, IsNotEmpty, MinLength, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../../shared/enum';

export class CreateUserDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'Email address for the user',
  })
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'Name of the user',
  })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({
    example: 'password',
    description: 'The new user password (optional, min length: 7)',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(7)
  readonly password: string;

  @ApiProperty({
    enum: UserRole,
    description: 'Role of the user (admin or member)',
  })
  @IsOptional()
  @IsEnum(UserRole)
  readonly role: UserRole;
}
