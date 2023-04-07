import { NestFactory } from '@nestjs/core';
import { Console } from 'console';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  await app.listen(9180, () => {
    console.log("Api is connected");
  });
}
bootstrap();
