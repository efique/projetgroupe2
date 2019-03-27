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

@Entity({ name: 'detailsUsers' })
export class DetailsUsers {
  @PrimaryGeneratedColumn('uuid', { name: 'detailsUsers_id' })
  public id: number;

  @OneToMany(type => Immobilier, immobilier => immobilier.detailsUsers, {
    nullable: true,
  })
  immobilier?: Immobilier[];

  @OneToOne(type => Localisation)
  @JoinColumn()
  localisation: Localisation;

  @Column({ name: 'nom', type: 'varchar' })
  public nom: string;

  @Column({ name: 'prenom', type: 'varchar' })
  public prenom: string;

  @Column({ name: 'telephone', type: 'varchar' })
  public telephone: string;

  @OneToOne(type => Users)
  @JoinColumn()
  users: Users;
}
