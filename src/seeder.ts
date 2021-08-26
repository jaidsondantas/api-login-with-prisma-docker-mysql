import {seeder} from "nestjs-seeder";
import {PrismaService} from 'src/shared/services/prisma.service';
import {SharedModule} from 'src/shared/shared.module';
import {UserSeeder} from 'src/database/seeders/user.seeder';
import {UsersService} from 'src/main/users/users.service';

seeder({
  imports: [SharedModule],
  providers: [
    PrismaService,
    UsersService
  ]
}).run([
  UserSeeder,
]);
