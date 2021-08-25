import {ExtractJwt, Strategy} from 'passport-jwt';
import {PassportStrategy} from '@nestjs/passport';
import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {jwtConstants} from './constants';
import {PrismaService} from 'src/shared/services/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private prisma: PrismaService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    })
  }

  async validate(payload: any) {
    if (!payload) {
      // throw new UnauthorizedException('Unauthorized', 'asdfa sdf');
      throw new HttpException({
        status: HttpStatus.UNAUTHORIZED,
        error: 'email ou senha incorretos, digite novamente!',
      }, HttpStatus.UNAUTHORIZED)
    }

    return await this.prisma.users.findFirst({
      where: {
        id: payload.sub
      },
      select: {
        id: true,
        email: true
      }
    });
  }
}
