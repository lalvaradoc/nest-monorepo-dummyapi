import { Test, TestingModule } from '@nestjs/testing';
import { MyappController } from './myapp.controller';
import { MyappService } from './myapp.service';

describe('MyappController', () => {
  let myappController: MyappController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MyappController],
      providers: [MyappService],
    }).compile();

    myappController = app.get<MyappController>(MyappController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(myappController.getHello()).toBe('Hello World!');
    });
  });
});
