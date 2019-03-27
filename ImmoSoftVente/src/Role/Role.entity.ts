import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RoleEnum } from '../Enum/Role.enum';
import { Users } from '../Users/Users.entity';

@Entity({ name: 'role' })
export class Role {
  @PrimaryGeneratedColumn('uuid', { name: 'role_id' })
  public id: number;

  @Column({ name: 'libelle', type: 'enum', enum: RoleEnum })
  public libelle: RoleEnum;

  @OneToOne(type => Users)
  users: Users;
}
