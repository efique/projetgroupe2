import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Agence } from '../Agence/Agence.entity';
import { Dependances } from '../Dependances/Dependances.entity';
import { DetailsUsers } from '../DetailsUsers/DetailsUsers.entity';
import { ImmobilierEnum } from '../enum/Immobilier.enum';
import { Localisation } from '../Localisation/Localisation.entity';
import { Image } from './Image.entity';

@Entity({ name: 'immobilier' })
export class Immobilier {
  @ManyToOne(type => Agence, agence => agence.immobilier)
  agence: Agence;

  @OneToMany(type => Dependances, dependances => dependances.immobilier, {
    nullable: true,
  })
  @JoinTable()
  dependances?: Dependances[];

  @Column({ name: 'description', type: 'text' })
  public description: string;

  @ManyToOne(type => DetailsUsers, detailsUsers => detailsUsers.immobilier)
  detailsUsers: DetailsUsers;

  @Column({ name: 'etage', type: 'int' })
  public etage: number;

  @Column({ name: 'frais_agence', type: 'int', default: '5000' })
  public frais_agence: number;

  @PrimaryGeneratedColumn('uuid', { name: 'immobilier_id' })
  public id: number;

  @OneToMany(type => Image, image => image.immobilier, { nullable: true })
  image?: Image[];

  @Column({ name: 'libelle', type: 'varchar' })
  public libelle: ImmobilierEnum;

  @OneToOne(type => Localisation)
  localisation: Localisation;

  @Column({ name: 'nombre_pièces', type: 'int' })
  public nombre_pièces: number;

  @Column({ name: 'prix_demande', type: 'int' })
  public prix_demande: number;

  @Column({ name: 'prix_mini', type: 'int' })
  public prix_mini: number;

  @Column({ name: 'superficie', type: 'float' })
  public superficie: number;

  @Column({ name: 'type', type: 'enum', enum: ImmobilierEnum })
  public type: string;

  @Column({ name: 'vendu', type: 'boolean', default: false })
  public vendu: boolean;
}
