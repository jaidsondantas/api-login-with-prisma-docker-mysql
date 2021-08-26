import {Seeder} from "nestjs-seeder";
import {Injectable} from "@nestjs/common";
import {PrismaService} from 'src/shared/services/prisma.service';
import {CreateUserDto} from 'src/main/users/dto/create-user.dto';
import {UsersService} from 'src/main/users/users.service';

@Injectable()
export class UserSeeder implements Seeder {

  constructor(
    private prisma: PrismaService,
    private _userService: UsersService
  ) {
  }

  async seed(): Promise<any> {
    if (!await this.prisma.seeds.count({where: {key: 'UserSeeder'}})) {
      const _user: CreateUserDto = {
        name: 'Usuário Teste',
        email: 'usuarioteste@gmail.com',
        password: '123',
      }

      await this._userService.create(_user);

      await this.prisma.seeds.create({
        data: {
          key: 'UserSeeder'
        }
      })
    }

    return Promise.resolve(undefined);
  }

  drop(): Promise<any> {
    return Promise.resolve(undefined);
  }

}
