import { Test, TestingModule } from '@nestjs/testing';
import { DummyServiceController } from '@kosmos/dummy-service.controller';
import { DummyServiceService } from '@kosmos/dummy-service.service';

describe('DummyServiceController', () => {
  let dummyServiceController: DummyServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DummyServiceController],
      providers: [DummyServiceService],
    }).compile();

    dummyServiceController = app.get<DummyServiceController>(DummyServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(dummyServiceController.getHello()).toBe('Hello World!');
    });
  });
});
