import { PartialType } from '@nestjs/swagger';
import { CreateDayEventDto } from './create-day-event.dto';

export class UpdateDayEventDto extends PartialType(CreateDayEventDto) {}
