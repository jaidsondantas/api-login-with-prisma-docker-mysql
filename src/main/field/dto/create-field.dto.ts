import {ApiProperty} from '@nestjs/swagger';

export class CreateFieldDto {
  @ApiProperty({
    default: 'Nome'
  })
  name: string

  @ApiProperty({
    default: 'Vamos começar pelo seu nome.'
  })
  question?: string

  @ApiProperty({
    default: true
  })
  required?: boolean

  @ApiProperty({
    default: ''
  })
  fieldType?: string

  @ApiProperty({
    default: ''
  })
  form?: string

}
