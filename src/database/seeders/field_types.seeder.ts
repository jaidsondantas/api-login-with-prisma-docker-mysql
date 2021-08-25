import {Seeder} from "nestjs-seeder";
import {Injectable} from "@nestjs/common";
import {PrismaService} from 'src/shared/services/prisma.service';

@Injectable()
export class FieldTypesSeeder implements Seeder {

  constructor(
    private prisma: PrismaService
  ) {
  }

  async seed(): Promise<any> {
    if (!await this.prisma.seeds.count({where: {key: 'FieldTypesSeeder'}})) {

      await this.prisma.field_types.createMany({
        data: [
          {
            name: 'text'
          },
          {
            name: 'date'
          },
          {
            name: 'select'
          },
          {
            name: 'auto-complete'
          },
        ]
      })

      await this.prisma.seeds.create({
        data: {
          key: 'FieldTypesSeeder'
        }
      })
    }

    return Promise.resolve(undefined);
  }

  drop(): Promise<any> {
    return Promise.resolve(undefined);
  }

}
