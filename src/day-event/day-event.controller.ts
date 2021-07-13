import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DayEventService } from './day-event.service';
import { CreateDayEventDto } from './dto/create-day-event.dto';
import { UpdateDayEventDto } from './dto/update-day-event.dto';

@Controller('day-event')
export class DayEventController {
  constructor(private readonly dayEventService: DayEventService) {}

  @Post()
  create(@Body() createDayEventDto: CreateDayEventDto) {
    return this.dayEventService.create(createDayEventDto);
  }

  @Get()
  findAll() {
    return this.dayEventService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dayEventService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDayEventDto: UpdateDayEventDto) {
    return this.dayEventService.update(+id, updateDayEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dayEventService.remove(+id);
  }
}
