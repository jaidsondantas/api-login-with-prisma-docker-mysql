import {Global, Module} from '@nestjs/common';
import {ParsePagination} from 'src/shared/helpers/parse-pagination';
import {PrismaService} from 'src/shared/services/prisma.service';
import {GenerateHash} from 'src/shared/helpers/generate-hash';
import { GenericService } from 'src/shared/services/generic.service';

@Global()
@Module({
  imports: [
    ParsePagination,
    PrismaService,
    GenerateHash,
  ],
  exports: [
    ParsePagination,
    PrismaService,
    GenerateHash,
  ],
  providers: [
    ParsePagination,
    PrismaService,
    GenerateHash,
  ]
})
export class SharedModule {
}
