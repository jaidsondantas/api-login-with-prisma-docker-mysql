import {Injectable} from '@nestjs/common';
import {UsersService} from 'src/main/users/users.service';
import {JwtService} from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import {AccessToken} from 'src/main/auth/dto/access-token';

@Injectable()
export class AuthService {

  constructor(
    private _userService: UsersService,
    private _jwtService: JwtService
  ) {
  }

  async validateUser(credentials: { email: string, password: string }): Promise<any> {
    const _user = await this._userService.findOne({email: credentials.email});
    if (_user && await bcrypt.compare(credentials.password, _user.password))
      return _user;
    return null;
  }

  async generateToken(user: any): Promise<AccessToken> {
    const payload = {username: user.email, sub: user.id};
    const accessToken = new AccessToken();
    accessToken.accessToken = this._jwtService.sign(payload, {
      expiresIn: '365d'
    })
    accessToken.user = user
    return accessToken;
  }

}
