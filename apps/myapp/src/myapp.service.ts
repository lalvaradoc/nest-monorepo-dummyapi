import { Injectable } from '@nestjs/common';

@Injectable()
export class MyappService {
  getHello(): string {
    return 'Hello World!';
  }
}
