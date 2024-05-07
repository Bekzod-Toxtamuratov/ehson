import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import { LoggerFactory } from './logger/logger-factory';

async function start() {
  const PORT = 3300;
  console.log(PORT);

  const app = await NestFactory.create(AppModule, {
    logger: LoggerFactory('ehson'),
  });

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Ehson App')
    .setDescription(
      "Haftasiga atigi 1000 so'm va ulkan sahovat karvoniga qo'shiling",
    )
    .setVersion('1.0')
    .addTag('ehsonBoy')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  app.use(cookieParser());
  await app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
start();
