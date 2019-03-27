import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from '../Users/Users.entity';

@Entity({ name: 'role' })
export class Role {
  @PrimaryGeneratedColumn('uuid', { name: 'role_id' })
  public id: number;

  @Column({ name: 'libelle', type: 'varchar' })
  public libelle: string;

  @OneToOne(type => Users)
  users: Users;
}
