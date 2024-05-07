import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException(`Unauthorized admin`);
    }

    const [bearer, token] = authHeader.split(' ');

    if (bearer !== 'Bearer' || !token) {
      throw new UnauthorizedException(`Invalid authorization`);
    }

    try {
      const admin = await this.jwtService.verify(token, {
        secret: process.env.ACCESS_TOKEN_KEY,
      });

      if (!admin || !admin.is_active) {
        throw new UnauthorizedException(
          `Unauthorized admin or admin is not active`,
        );
      }

      req.admin = admin;
      return true;
    } catch (error) {
      throw new UnauthorizedException(`Invalid token`);
    }
  }
}
