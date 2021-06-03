import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Market {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  price: number;

  @Column()
  url: string;
}
