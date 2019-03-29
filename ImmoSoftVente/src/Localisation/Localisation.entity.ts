import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Agence } from '../Agence/Agence.entity';
import { DetailsUsers } from '../DetailsUsers/DetailsUsers.entity';
import { Immobilier } from '../Immobilier/Immobilier.entity';

@Entity({ name: 'Localisation' })
export class Localisation {
  @OneToOne(type => Agence)
  agence: Agence;

  @OneToOne(type => DetailsUsers)
  detailsUsers: DetailsUsers;

  @PrimaryGeneratedColumn('uuid', { name: 'localisation_id' })
  public id: number;

  @OneToOne(type => Immobilier)
  immobilier: Immobilier;

  @Column({ name: 'rue', type: 'varchar' })
  public rue: string;

  @Column({ name: 'numero', type: 'int' })
  public numero: number;

  @Column({ name: 'postal', type: 'varchar' })
  public postal: string;

  @Column({ name: 'ville', type: 'varchar' })
  public ville: string;
}
