import { DayEvent } from 'src/day-event/entities/day-event.entity';
import { Schedule } from 'src/schedule/entities/schedule.entity';
import { Entity, OneToOne } from 'typeorm';

@Entity()
export class GroupEvent {
  @OneToOne(() => Schedule)
  schedule: Schedule;

  @OneToOne(() => DayEvent)
  dayEvent: DayEvent;
}
