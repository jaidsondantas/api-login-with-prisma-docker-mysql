import {Injectable} from '@nestjs/common';
import {GenericService} from 'src/shared/services/generic.service';
import {Prisma} from "@prisma/client";
import {User} from 'src/main/users/entities/user.entity';
import {CreateFieldDto} from 'src/main/field/dto/create-field.dto';

@Injectable()
export class FieldService extends GenericService<Prisma.fieldsFindManyArgs, Prisma.fieldsCreateInput, Prisma.fieldsUpdateInput> {

  constructor() {
    super({pEntity: 'fields'});
  }

  prepare(createInput: CreateFieldDto, user: User): Prisma.fieldsCreateInput {

    const input: Prisma.fieldsCreateInput = {
      name: createInput.name,
      question: createInput.question,
      fieldType: {
        connect: {
          id: createInput.fieldType
        }
      },
      form: {
        connect: {
          id: createInput.form
        }
      },
      required: createInput.required
    }
    return super.prepare(input, user);
  }
}
