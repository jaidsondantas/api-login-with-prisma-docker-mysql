import {ApiProperty} from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty( {
    default: 'Usuário Teste'
  })
  name: string;

  @ApiProperty({
    default: 'usuarioteste@gmail.com'
  })
  email: string;

  @ApiProperty({
    default: '123'
  })
  password: string;

}
