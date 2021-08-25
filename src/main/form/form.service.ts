import {Injectable} from '@nestjs/common';
import {GenericService} from 'src/shared/services/generic.service';
import {Prisma} from "@prisma/client";
import {User} from 'src/main/users/entities/user.entity';
import {CreateFormDto} from 'src/main/form/dto/create-form.dto';

@Injectable()
export class FormService extends GenericService<Prisma.formsFindManyArgs, Prisma.formsCreateInput, Prisma.formsUpdateInput> {

  constructor() {
    super({pEntity: 'forms'});
  }

  prepare(createInput: CreateFormDto, user: User): Prisma.formsCreateInput {

    createInput.fields.map(f => {
      f.fieldType = {
        connect: {
          id: f.fieldType
        }
      }
    })

    const input: Prisma.formsCreateInput = {
      name: createInput.name,
      description: createInput.description,
      fields: {
        create: createInput.fields
      },
      client: {
        connect: {
          id: user.id
        }
      }
    }

    console.log(input)

    return super.prepare(input, user);
  }
}
