import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly role: string) { }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user; 
    
    if (user.role !== this.role) {
      throw new UnauthorizedException('You do not have access to this API.');
    }
    return true;
  }
}
