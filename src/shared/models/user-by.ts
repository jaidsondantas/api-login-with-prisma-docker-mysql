import {User} from 'src/main/users/entities/user.entity';
import {Id} from "./id";

export class UsersBy extends Id {
    createdBy: User
    updatedBy: User
}
