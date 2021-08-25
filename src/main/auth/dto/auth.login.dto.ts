import {ApiProperty} from '@nestjs/swagger';

export class AuthLoginDto {
  @ApiProperty({
    default: 'jaidsondantas@gmail.com'
  })
  email?: string;

  @ApiProperty({
    default: '123'
  })
  password?: string;
}
