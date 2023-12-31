import { IsEmail, IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDTO {
  @ApiProperty({
    example: 'admin@inventorySyatem',
    description: 'User email',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'admin-inventorySyatem',
    description: 'User password',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
