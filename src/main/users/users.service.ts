import {HttpException, HttpStatus, Injectable, Scope} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {PrismaService} from 'src/shared/services/prisma.service';
import {GenerateHash} from 'src/shared/helpers/generate-hash';
import {Prisma} from "@prisma/client";
import {User} from 'src/main/users/entities/user.entity';

@Injectable({
  scope: Scope.DEFAULT
})
export class UsersService {

  constructor(
    private prisma: PrismaService,
    private generateHash: GenerateHash
  ) {
  }

  async create(createUserDto: CreateUserDto) {
    const _user = await this.prepare(createUserDto);

    try {
      return await this.prisma.users.create({
        data: _user
      });
    } catch (e) {
      console.log(e)
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: e.message
      }, HttpStatus.BAD_REQUEST)
    }
  }

  findAll() {
    return this.prisma.users.findMany({});
  }

  async findOne(query: { id?: string, email?: string }): Promise<User | undefined> {
    return await this.prisma.users.findFirst({where: query});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async prepare(user: CreateUserDto | UpdateUserDto): Promise<Promise<Prisma.usersUncheckedCreateInput> | Promise<any>> {

    const saltOrRounds = 10;
    const _user: Prisma.usersCreateInput = {
      name: user.name,
      email: user.email,
      password: await this.generateHash.generateHash(user.password, saltOrRounds),
      salt: await this.generateHash.genSalt(),
    };
    return _user;
  }
}
