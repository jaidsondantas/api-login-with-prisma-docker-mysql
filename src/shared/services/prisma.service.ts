import {Injectable, OnModuleDestroy, OnModuleInit, Scope} from '@nestjs/common';
import {PrismaClient} from '@prisma/client';

@Injectable({scope: Scope.DEFAULT})
export class PrismaService extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
