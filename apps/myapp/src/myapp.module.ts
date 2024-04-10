import { Module } from '@nestjs/common';
import { MyappController } from './myapp.controller';
import { MyappService } from './myapp.service';

@Module({
  imports: [],
  controllers: [MyappController],
  providers: [MyappService],
})
export class MyappModule {}
