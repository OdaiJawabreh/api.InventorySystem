import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody } from '@nestjs/swagger';
import { LoginDTO } from './dto/login.dto';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService) {}

  @Post('login')
  @ApiBody({ type: LoginDTO })
  async login(@Body() loginDto: LoginDTO) {
    return await this.authService.login(loginDto);
  }
}
