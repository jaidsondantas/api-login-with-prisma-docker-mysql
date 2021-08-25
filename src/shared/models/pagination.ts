import {ApiProperty} from '@nestjs/swagger';

export class Pagination {

  @ApiProperty({
    required: false,
    type: 'Any',
    default: {}
  })
  where: object

  @ApiProperty({
    required: false,
    type: 'Any',
    default: {createdAt: 'desc'}
  })
  orderBy: object

  @ApiProperty({
    required: false,
    type: 'Any',
    default: {}
  })
  include: object

  @ApiProperty({
    required: false,
    type: 'Any',
    default: {}
  })
  select: object

  @ApiProperty({
    required: false,
    default: 0,
  })
  skip?: number

  @ApiProperty({
    required: false,
    default: 15
  })
  take?: number

}
