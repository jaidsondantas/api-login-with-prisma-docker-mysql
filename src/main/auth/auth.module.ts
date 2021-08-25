import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {LocalStrategy} from 'src/main/auth/local.strategy';
import {UsersModule} from 'src/main/users/users.module';
import {PassportModule} from '@nestjs/passport';
import {PrismaService} from 'src/shared/services/prisma.service';
import {GenerateHash} from 'src/shared/helpers/generate-hash';
import {AuthController} from './auth.controller';
import {JwtModule} from '@nestjs/jwt';
import {jwtConstants} from 'src/main/auth/constants';
import {JwtStrategy} from 'src/main/auth/jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: jwtConstants.secret,
        signOptions: {expiresIn: '360d'}
      }),
    }),
    PassportModule.register({defaultStrategy: 'local'})
  ],
  providers: [
    AuthService,
    PrismaService,
    GenerateHash,
    // JwtService,
    JwtStrategy,
    LocalStrategy
  ],
  exports: [
    AuthService
  ],
  controllers: [AuthController]
})
export class AuthModule {
}
