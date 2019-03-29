import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Immobilier } from '../Immobilier/Immobilier.entity';
import { Localisation } from '../Localisation/Localisation.entity';
import { Users } from '../Users/Users.entity';

@Entity({ name: 'Agence' })
export class Agence {
  @PrimaryGeneratedColumn('uuid', { name: 'agence_id' })
  public id: number;

  @OneToMany(type => Immobilier, immobilier => immobilier.agence)
  immobilier: Immobilier[];

  @OneToOne(type => Localisation)
  @JoinColumn()
  localisation: Localisation;

  @Column({ name: 'telephone', type: 'varchar' })
  public telephone: string;

  @OneToOne(type => Users)
  Users: Users;
}
