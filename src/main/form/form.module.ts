import {Module} from '@nestjs/common';
import {FormController} from './form.controller';
import {FormService} from './form.service';
import {PrismaService} from 'src/shared/services/prisma.service';

@Module({
  imports: [PrismaService],
  controllers: [FormController],
  providers: [FormService]
})
export class FormModule {
}
