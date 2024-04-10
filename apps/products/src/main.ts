import { NestFactory } from '@nestjs/core';
import { ProductsModule } from '@kosmos/products.module';

async function bootstrap() {
  const app = await NestFactory.create(ProductsModule);
  await app.listen(3000);
}
bootstrap();
