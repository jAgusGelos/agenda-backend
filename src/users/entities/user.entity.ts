import { Schedule } from 'src/schedule/entities/schedule.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  celular: string;

  @Column()
  email: string;

  @Column()
  dni: string;

  @OneToOne(() => Schedule)
  @JoinColumn()
  schedule: Schedule;
}
