import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Train {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  departurePlace: string;

  @Column()
  arrivalPlace: string;

  @Column()
  departureTime: Date;

  @Column()
  arrivalTime: Date;

  @Column()
  price: number;
}
