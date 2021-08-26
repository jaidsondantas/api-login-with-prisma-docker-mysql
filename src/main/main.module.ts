import {Module} from '@nestjs/common';
import {UsersModule} from 'src/main/users/users.module';
import {AuthModule} from 'src/main/auth/auth.module';
import {ConfigModule} from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ]
})
export class MainModule {
}
