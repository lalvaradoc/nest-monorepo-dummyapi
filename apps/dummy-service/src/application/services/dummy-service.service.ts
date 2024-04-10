import { Injectable } from '@nestjs/common';

@Injectable()
export class DummyServiceService {
  getHello(): string {
    return 'Hello World from generated kosmos service!';
  }
}
