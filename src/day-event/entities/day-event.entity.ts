import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DayEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startHour: Date;

  @Column()
  finishHour: Date;

  @Column()
  asist: boolean;
}
