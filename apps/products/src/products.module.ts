import { Module } from '@nestjs/common';
import { ProductsController } from '@kosmos/products.controller';
import { ProductsService } from '@kosmos/products.service';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
