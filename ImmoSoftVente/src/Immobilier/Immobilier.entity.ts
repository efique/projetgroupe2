import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Agence } from '../Agence/Agence.entity';
import { DetailsUsers } from '../DetailsUsers/DetailsUsers.entity';
import { Localisation } from '../Localisation/Localisation.entity';
import { Image } from './Image.entity';

@Entity({ name: 'immobilier' })
export class Immobilier {
  @ManyToOne(type => Agence, agence => agence.immobilier)
  agence: Agence;

  @Column({ name: 'description', type: 'text' })
  public description: string;

  @ManyToOne(type => DetailsUsers, detailsUsers => detailsUsers.immobilier)
  detailsUsers: DetailsUsers;

  @Column({ name: 'etage', type: 'int' })
  public etage: string;

  @Column({ name: 'frais_agence', type: 'int' })
  public frais_agence: string;

  @OneToMany(type => Image, image => image.immobilier)
  image: Image[];

  @PrimaryGeneratedColumn('uuid', { name: 'immo_id' })
  public immoId: string;

  @Column({ name: 'libelle', type: 'varchar' })
  public libelle: string;

  @OneToOne(type => Localisation)
  localisation: Localisation;

  @Column({ name: 'nombre_pièces', type: 'int' })
  public nombre_pièces: string;

  @Column({ name: 'prix_demande', type: 'int' })
  public prix_demande: string;

  @Column({ name: 'prix_mini', type: 'int' })
  public prix_mini: string;

  @Column({ name: 'superficie', type: 'float' })
  public superficie: string;

  @Column({ name: 'vendu', type: 'int' })
  public vendu: string;
}
