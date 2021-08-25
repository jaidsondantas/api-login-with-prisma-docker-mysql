import {Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards} from '@nestjs/common';
import {FormService} from 'src/main/form/form.service';
import {ApiBearerAuth, ApiHeader, ApiTags} from '@nestjs/swagger';
import {CreateFormDto} from 'src/main/form/dto/create-form.dto';
import {UpdateFormDto} from 'src/main/form/dto/update-form.dto';
import {User} from 'src/main/users/entities/user.entity';
import {JwtAuthGuard} from 'src/main/auth/jwt-auth.guard';
import {Pagination} from 'src/shared/models/pagination';
import {ParsePagination} from 'src/shared/helpers/parse-pagination';
import {CurrentUser} from 'src/main/auth/constants';

@Controller('forms')
@ApiBearerAuth()
@ApiTags('forms')
@ApiHeader({
  name: 'Authorization',
  schema: {
    default: 'Bearer {{token}}'
  }
})
export class FormController {

  constructor(
    private formService: FormService,
    private _pP: ParsePagination = new ParsePagination(),
  ) {
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() query: Pagination) {
    return this.formService.findAll(this._pP.parsePagination(query));
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createDto: CreateFormDto, @CurrentUser() user: User): any {
    return this.formService.create(createDto, user);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateFormDto, @CurrentUser() user: User) {
    return this.formService.update(id, updateDto, user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formService.remove(id);
  }

}
