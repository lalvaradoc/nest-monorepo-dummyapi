import { Controller, Get } from '@nestjs/common';
import { MyappService } from './myapp.service';

@Controller()
export class MyappController {
  constructor(private readonly myappService: MyappService) {}

  @Get()
  getHello(): string {
    return this.myappService.getHello();
  }
}
