import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class MarketArticle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  price: number;

  @Column()
  url: string;
}
