import { Module } from '@nestjs/common';
import { DayEventService } from './day-event.service';
import { DayEventController } from './day-event.controller';

@Module({
  controllers: [DayEventController],
  providers: [DayEventService]
})
export class DayEventModule {}
