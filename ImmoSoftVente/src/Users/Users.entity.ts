import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Agence } from '../Agence/Agence.entity';
import { Annonce } from '../Annonce/Annonce.entity';
import { DetailsUsers } from '../DetailsUsers/DetailsUsers.entity';
import { Favoris } from '../Favoris/Favoris.entity';
import { Role } from '../Role/Role.entity';

@Entity({ name: 'users' })
export class Users {
  @OneToOne(type => Agence, { nullable: true })
  @JoinColumn()
  agence?: Agence;

  @OneToMany(type => Annonce, agence => agence.users, { nullable: true })
  annonce?: Annonce[];

  @OneToOne(type => DetailsUsers)
  detailsUsers: DetailsUsers;

  @ManyToMany(type => Favoris, favoris => favoris.users)
  @JoinTable()
  favoris: Favoris[];

  @PrimaryGeneratedColumn('uuid', { name: 'users_id' })
  public id: number;

  @Column({ name: 'mail', type: 'varchar' })
  public mail: string;

  @Column({ name: 'password', type: 'varchar' })
  public password: string;

  @OneToOne(type => Role)
  @JoinColumn()
  role: Role;
}
