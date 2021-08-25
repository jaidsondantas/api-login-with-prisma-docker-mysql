import {Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards} from '@nestjs/common';
import {FieldService} from 'src/main/field/field.service';
import {ApiBearerAuth, ApiHeader, ApiTags} from '@nestjs/swagger';
import {CreateFieldDto} from 'src/main/field/dto/create-field.dto';
import {UpdateFieldDto} from 'src/main/field/dto/update-field.dto';
import {User} from 'src/main/users/entities/user.entity';
import {JwtAuthGuard} from 'src/main/auth/jwt-auth.guard';
import {Pagination} from 'src/shared/models/pagination';
import {ParsePagination} from 'src/shared/helpers/parse-pagination';
import {CurrentUser} from 'src/main/auth/constants';

@Controller('fields')
@ApiBearerAuth()
@ApiTags('fields')
@ApiHeader({
  name: 'Authorization',
  schema: {
    default: 'Bearer {{token}}'
  }
})
export class FieldController {

  constructor(
    private fieldService: FieldService,
    private _pP: ParsePagination = new ParsePagination(),
  ) {
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() query: Pagination) {
    return this.fieldService.findAll(this._pP.parsePagination(query));
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createDto: CreateFieldDto, @CurrentUser() user: User): any {
    return this.fieldService.create(createDto, user);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateFieldDto, @CurrentUser() user: User) {
    return this.fieldService.update(id, updateDto, user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fieldService.remove(id);
  }

}
