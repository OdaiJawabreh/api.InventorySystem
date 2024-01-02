import { Injectable, UnauthorizedException, forwardRef } from '@nestjs/common';
import { LoginDTO } from './dto/login.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/entities/user.entity';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}


    async login(signInDto: LoginDTO): Promise<{ accessToken: string }> {
        const { email, password } = signInDto;
        
        try {
          const user = await this.userService.findUserByEmail(email);
           
          const isMatch = await this.comparePassword(password, user.password);
          
          if (!isMatch) {
            throw new UnauthorizedException('Wrong password. Please try again.');
          }
          const accessToken = this.generateToken(user);
          return { accessToken };
        } catch (error) {
          throw new UnauthorizedException('Authentication failed. Please try again.');
        }
      }
    
      private async comparePassword(password: string, hash: string): Promise<boolean> {        
        return await bcrypt.compare(password, hash);
      }
    
      private generateToken(userData: User): string {
        const {  name, email, role } = userData; // Extract only necessary fields
        const payload = {  name, email, role }; 
        return sign( payload , 'your-access-token-secret', {
          expiresIn: '10d',
        })
      }
}
