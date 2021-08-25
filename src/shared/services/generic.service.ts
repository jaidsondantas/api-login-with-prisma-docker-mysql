import {HttpException, HttpStatus, Injectable, Scope} from '@nestjs/common';
import {PaginatedResponse} from 'src/shared/models/paginated';
import {PrismaService} from 'src/shared/services/prisma.service';
import {User} from 'src/main/users/entities/user.entity';

@Injectable({scope: Scope.DEFAULT})
export class GenericService<FindManyArgs, CreateInput, UpdateInput> {
  paginated: PaginatedResponse
  pEntity: string;
  prisma: PrismaService

  constructor(
    {
      pEntity = '',
      prisma = new PrismaService()
    }
  ) {
    this.paginated = new PaginatedResponse();
    this.pEntity = pEntity;
    this.prisma = prisma;
  }

  async findAll(requestQuery: FindManyArgs) {
    this.paginated.data = await this.prisma[this.pEntity].findMany(requestQuery);
    this.paginated.total = await this.prisma[this.pEntity].count({
      where: requestQuery['where']
    });
    return this.paginated
  }

  async create(createInput: CreateInput | any, user: User) {
    try {
      return await this.prisma[this.pEntity].create({data: this.prepare(createInput, user)})
    } catch (e) {
      console.log(e)
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: e.message
      }, HttpStatus.BAD_REQUEST)
    }
  }

  async update(id: string, updateInput: UpdateInput | any, user: User) {
    try {
      return await this.prisma[this.pEntity].update({
        data: {
          ...this.prepareUpdate(updateInput, user)
        },
        where: {
          id
        }
      })
    } catch (e) {
      console.log(e)
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: e.message
      }, HttpStatus.BAD_REQUEST)
    }
  }

  async remove(id: string) {
    const _itemDeleted = await this.prisma[this.pEntity].findFirst({where: {id}})
    try {
      await this.prisma[this.pEntity].deleteMany({where: {id}});
    } catch (e) {
      console.log(e)
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: e.message
      }, HttpStatus.BAD_REQUEST)
    }
    return _itemDeleted;

  }

  prepare(createInput: CreateInput | any, user: User): CreateInput {
    return {
      ...createInput,
      createdBy: user?.id ? {
        connect: {
          id: user.id
        },
      } : null
    }
  }

  prepareUpdate(updateInput: UpdateInput, user: User): UpdateInput {
    return {
      ...updateInput,
      updatedBy: user?.id ? {
        connect: {
          id: user.id
        },
      } : null
    }
  }

}
