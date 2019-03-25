import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from '../Users/Users.entity';

@Entity({ name: 'role' })
export class Role {
  @Column({ name: 'libelle', type: 'varchar' })
  public libelle: string;

  @PrimaryGeneratedColumn('uuid', { name: 'role_id' })
  public roleId: string;

  @OneToOne(type => Users)
  @JoinColumn()
  users: Users;
}
