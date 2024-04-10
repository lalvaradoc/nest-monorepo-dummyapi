import { NestFactory } from '@nestjs/core';
import { MyappModule } from './myapp.module';

async function bootstrap() {
  const app = await NestFactory.create(MyappModule);
  await app.listen(3000);
}
bootstrap();
