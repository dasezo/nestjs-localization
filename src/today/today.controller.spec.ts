import { Test, TestingModule } from '@nestjs/testing';
import { TodayController } from './today.controller';

describe('TodayController', () => {
  let controller: TodayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodayController],
    }).compile();

    controller = module.get<TodayController>(TodayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
