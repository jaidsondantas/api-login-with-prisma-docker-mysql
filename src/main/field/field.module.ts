import {Module} from '@nestjs/common';
import {FieldController} from 'src/main/field/field.controller';
import {FieldService} from 'src/main/field/field.service';
import {PrismaService} from 'src/shared/services/prisma.service';

@Module({
  imports: [PrismaService],
  controllers: [FieldController],
  providers: [FieldService]
})
export class FieldModule {
}
