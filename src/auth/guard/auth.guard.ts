import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';

@Injectable()
export class AuthJwtGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.replace('Bearer ', '');
    try {
      const decoded = this.jwtService.decode(token);
     
      const {email,name,password,role} = decoded
      request.user = {email,name,password,role}       
      return true;
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        try {
          const newAccessToken = this.jwtService.sign({ userData: request.user });
          request.headers.authorization = `Bearer ${newAccessToken}`; 
          return true;
        } catch (error) {
          throw new UnauthorizedException('Access token expired. Failed to refresh access token.');
        }
      }   
      throw new UnauthorizedException('You are not authorized to access this resource.');
    }
  }
}
