import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Agence } from '../Agence/Agence.entity';
import { DetailsUsers } from '../DetailsUsers/DetailsUsers.entity';
import { Role } from '../Role/Role.entity';

@Entity({ name: 'users' })
export class Users {
  @OneToOne(type => Agence, { nullable: true })
  agence?: Agence;

  @OneToOne(type => DetailsUsers)
  detailsUsers: DetailsUsers;

  @Column({ name: 'mail', type: 'varchar' })
  public mail: string;

  @Column({ name: 'password', type: 'varchar' })
  public password: string;

  @OneToOne(type => Role)
  role: Role;

  @OneToOne(type => Users, { nullable: true })
  Users?: Users;

  @PrimaryGeneratedColumn('uuid', { name: 'users_id' })
  public usersId: string;
}
