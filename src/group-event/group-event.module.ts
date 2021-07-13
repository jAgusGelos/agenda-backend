import { Module } from '@nestjs/common';
import { GroupEventService } from './group-event.service';
import { GroupEventController } from './group-event.controller';

@Module({
  controllers: [GroupEventController],
  providers: [GroupEventService]
})
export class GroupEventModule {}
