import { Controller, Get } from '@nestjs/common';
import { ProductsService } from '@kosmos/products.service';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getHello(): string {
    return this.productsService.getHello();
  }
}
