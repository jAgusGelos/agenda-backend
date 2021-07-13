import { Test, TestingModule } from '@nestjs/testing';
import { DayEventController } from './day-event.controller';
import { DayEventService } from './day-event.service';

describe('DayEventController', () => {
  let controller: DayEventController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DayEventController],
      providers: [DayEventService],
    }).compile();

    controller = module.get<DayEventController>(DayEventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
