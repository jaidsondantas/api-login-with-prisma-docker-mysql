import {Body, Controller, HttpException, HttpStatus, Post} from '@nestjs/common';
import {AuthService} from 'src/main/auth/auth.service';
import {ApiTags} from '@nestjs/swagger';
import {AuthLoginDto} from 'src/main/auth/dto/auth.login.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {

  constructor(private _authService: AuthService) {
  }

  // @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() body: AuthLoginDto) {
    const _user = await this._authService.validateUser({email: body.email, password: body.password})
    if (_user) {
      return this._authService.generateToken(_user);
    }
    throw new HttpException({
      status: HttpStatus.UNAUTHORIZED,
      error: 'email ou senha incorretos, digite novamente!',
    }, HttpStatus.UNAUTHORIZED)
  }

}
