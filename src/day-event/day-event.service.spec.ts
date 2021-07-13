import { Test, TestingModule } from '@nestjs/testing';
import { DayEventService } from './day-event.service';

describe('DayEventService', () => {
  let service: DayEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DayEventService],
    }).compile();

    service = module.get<DayEventService>(DayEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
