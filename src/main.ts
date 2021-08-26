import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: ['error', 'warn'],
    cors: true
  });

  const config = new DocumentBuilder()
    .setTitle('Login With Prisma + Docker')
    .setDescription('Login With Prisma + Docker description')
    .setVersion('1.0')
    .addBearerAuth({type: undefined, scheme: '{{token}}'})
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(4000);
}

bootstrap();
