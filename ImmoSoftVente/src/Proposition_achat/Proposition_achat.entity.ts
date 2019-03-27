import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Annonce } from '../Annonce/Annonce.entity';

@Entity({ name: 'propositionAchat' })
export class PropositionAchat {
  @ManyToOne(type => Annonce, annonce => annonce.propositionAchat)
  annonce: Annonce;

  @Column({ name: 'date', type: 'datetime' })
  public date: string;

  @PrimaryGeneratedColumn('uuid', { name: 'propositionAchat_id' })
  public id: number;

  @Column({ name: 'libelle', type: 'varchar' })
  public libelle: string;
}
