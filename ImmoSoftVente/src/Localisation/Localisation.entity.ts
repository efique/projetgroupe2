import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Agence } from '../Agence/Agence.entity';
import { DetailsUsers } from '../DetailsUsers/DetailsUsers.entity';
import { Immobilier } from '../Immobilier/Immobilier.entity';

@Entity({ name: 'Localisation' })
export class Localisation {
  @OneToOne(type => Agence)
  @JoinColumn()
  agence: Agence;

  @OneToOne(type => DetailsUsers)
  @JoinColumn()
  detailsUsers: DetailsUsers;

  @OneToOne(type => Immobilier)
  immobilier: Immobilier;

  @PrimaryGeneratedColumn('uuid', { name: 'localisation_id' })
  public localisationId: string;

  @Column({ name: 'nom', type: 'varchar' })
  public nom: string;

  @Column({ name: 'numero', type: 'varchar' })
  public numero: string;

  @Column({ name: 'postal', type: 'varchar' })
  public postal: string;

  @Column({ name: 'ville', type: 'varchar' })
  public ville: string;
}
