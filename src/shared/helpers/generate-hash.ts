import {Injectable, Scope} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable({scope: Scope.DEFAULT})
export class GenerateHash {

  async generateHash(password, salt): Promise<string> {
    return await bcrypt.hash(password, salt)
  }

  async genSalt() {
    return bcrypt.genSalt();
  }
}
