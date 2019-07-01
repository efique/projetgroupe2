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
import { RoleEnum } from '../Enum/Role.enum';
import { Favoris } from '../Favoris/Favoris.entity';

@Entity({ name: 'users' })
export class Users {
  @OneToOne(type => Agence, { nullable: true })
  @JoinColumn()
  agence?: Agence;

  @OneToMany(type => Annonce, agence => agence.users, { nullable: true })
  annonce?: Annonce[];

  @OneToOne(type => DetailsUsers)
  detailsUsers: DetailsUsers;

  @ManyToMany(type => Favoris, favoris => favoris.users, { nullable: true })
  @JoinTable()
  favoris?: Favoris[];

  @PrimaryGeneratedColumn('uuid', { name: 'users_id' })
  public id: number;

  @Column({ name: 'mail', type: 'varchar' })
  public mail: string;

  @Column({ name: 'password', type: 'varchar' })
  public password: string;

  @Column({
    name: 'role',
    type: 'enum',
    enum: RoleEnum,
    default: 'Utilisateur',
  })
  public role: RoleEnum;

  @Column({ name: 'token', type: 'varchar', default: null})
  public token: string;
}
