import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from '@nestjs/config';
import {SharedModule} from 'src/shared/shared.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {typeOrmOptions} from 'src/database/config-database';
import { MainModule } from './main/main.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmOptions),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SharedModule,
    MainModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
