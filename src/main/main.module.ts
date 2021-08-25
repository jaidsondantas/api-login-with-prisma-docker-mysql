import {Module} from '@nestjs/common';
import {UsersModule} from 'src/main/users/users.module';
import {AuthModule} from 'src/main/auth/auth.module';
import {ConfigModule} from '@nestjs/config';
import {FormModule} from './form/form.module';
import {FieldModule} from 'src/main/field/field.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    FormModule,
    FieldModule
  ]
})
export class MainModule {
}
