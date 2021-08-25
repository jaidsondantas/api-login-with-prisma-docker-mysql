import {ApiProperty} from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty( {
    default: 'Jaidson Dantas'
  })
  name: string;

  @ApiProperty({
    default: 'jaidsondantas@gmail.com'
  })
  email: string;

  @ApiProperty({
    default: '123'
  })
  password: string;

}
