import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DependancesEnum } from '../enum/Dependance.enum';
import { Immobilier } from '../Immobilier/Immobilier.entity';

@Entity({ name: 'dependances' })
export class Dependances {
  @Column({ name: 'description', type: 'text' })
  public description: string;

  @PrimaryGeneratedColumn('uuid', { name: 'dependances_id' })
  public id: number;

  @ManyToOne(type => Immobilier, immobilier => immobilier.dependances)
  immobilier: Immobilier;

  @Column({ name: 'type', type: 'enum', enum: DependancesEnum })
  public libelle: DependancesEnum;

  @Column({ name: 'superficie', type: 'float' })
  public superficie: string;
}
