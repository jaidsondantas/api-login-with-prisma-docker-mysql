import {DateAt} from 'src/shared/models/date-at';
import {Exclude} from 'class-transformer';

export class User extends DateAt {

  id?: string;
  name?: string;
  email?: string;
  @Exclude()
  password?: string;
  salt?: string;

  constructor() {
    super();
    Object.assign(this, null);
  }
}
