import {Seeder} from "nestjs-seeder";
import {Injectable} from "@nestjs/common";
import {PrismaService} from 'src/shared/services/prisma.service';

@Injectable()
export class FormsSeeder implements Seeder {

  constructor(
    private prisma: PrismaService
  ) {
  }

  async seed(): Promise<any> {
    if (!await this.prisma.seeds.count({where: {key: 'FormsSeeder'}})) {

      const user = await this.prisma.users.findFirst();

      await this.prisma.forms.createMany({
        data: [
          {
            name: 'text',
            description: 'Description form',
            clientId: user.id
          }
        ]
      })

      await this.prisma.seeds.create({
        data: {
          key: 'FormsSeeder'
        }
      })
    }

    return Promise.resolve(undefined);
  }

  drop(): Promise<any> {
    return Promise.resolve(undefined);
  }

}
