import { Injectable } from '@nestjs/common';
import { CreateDayEventDto } from './dto/create-day-event.dto';
import { UpdateDayEventDto } from './dto/update-day-event.dto';

@Injectable()
export class DayEventService {
  create(createDayEventDto: CreateDayEventDto) {
    return 'This action adds a new dayEvent';
  }

  findAll() {
    return `This action returns all dayEvent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dayEvent`;
  }

  update(id: number, updateDayEventDto: UpdateDayEventDto) {
    return `This action updates a #${id} dayEvent`;
  }

  remove(id: number) {
    return `This action removes a #${id} dayEvent`;
  }
}
