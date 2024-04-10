import { Module } from '@nestjs/common';
import { DummyServiceController } from '@kosmos/dummy-service.controller';
import { DummyServiceService } from '@kosmos/dummy-service.service';

@Module({
  imports: [],
  controllers: [DummyServiceController],
  providers: [DummyServiceService],
})
export class DummyServiceModule {}
