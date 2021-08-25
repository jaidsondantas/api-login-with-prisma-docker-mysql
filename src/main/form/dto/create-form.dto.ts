import {ApiProperty} from '@nestjs/swagger';
import {CreateFieldDto} from 'src/main/field/dto/create-field.dto';
import {Prisma} from "@prisma/client";

export class CreateFormDto {
  @ApiProperty({
    default: 'Form 1'
  })
  name: string

  @ApiProperty({
    default: 'Form Description'
  })
  description?: string

  fields?: Prisma.fieldsCreateWithoutFormInput[] | Prisma.fieldsCreateManyFormInput[]

}
