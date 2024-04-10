import { Controller, Get } from '@nestjs/common';
import { DummyServiceService } from '@kosmos/dummy-service.service';

@Controller()
export class DummyServiceController {
  constructor(private readonly dummyServiceService: DummyServiceService) {}

  @Get()
  getHello(): string {
    return this.dummyServiceService.getHello();
  }
}
