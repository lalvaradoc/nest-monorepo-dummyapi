import { NestFactory } from '@nestjs/core';
import { DummyServiceModule } from '@kosmos/dummy-service.module';

async function bootstrap() {
  const app = await NestFactory.create(DummyServiceModule);
  await app.listen(3000);
}
bootstrap();
