import { Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Annonce } from '../Annonce/Annonce.entity';
import { Users } from '../Users/Users.entity';

@Entity({ name: 'favoris' })
export class Favoris {
  @ManyToOne(type => Annonce, annonce => annonce.favoris, { nullable: true })
  annonce?: Annonce;

  @PrimaryGeneratedColumn('uuid', { name: 'favoris_id' })
  public id: number;

  @ManyToMany(type => Users, users => users.favoris, { nullable: true })
  users?: Users[];
}
