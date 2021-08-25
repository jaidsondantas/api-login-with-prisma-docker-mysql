import {PartialType} from '@nestjs/mapped-types';
import {CreateFormDto} from 'src/main/form/dto/create-form.dto';

export class UpdateFieldDto extends PartialType(CreateFormDto) {
}
