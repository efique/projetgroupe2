import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Immobilier } from '../Immobilier/Immobilier.entity';
import { Localisation } from '../Localisation/Localisation.entity';

@Entity({ name: 'Agence' })
export class Agence {
  @PrimaryGeneratedColumn('uuid', { name: 'agence_id' })
  public agenceId: string;

  @OneToMany(type => Immobilier, immobilier => immobilier.agence)
  immobilier: Immobilier[];

  @OneToOne(type => Localisation)
  Localisation: Localisation;

  @Column({ name: 'telephone', type: 'varchar' })
  public telephone: string;
}
