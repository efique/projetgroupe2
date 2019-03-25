import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Immobilier } from './Immobilier.entity';

@Entity({ name: 'image' })
export class Image {
  @Column({ name: 'image', type: 'blob' })
  public description: string;

  @PrimaryGeneratedColumn('uuid', { name: 'image_id' })
  public imageId: string;

  @ManyToOne(type => Immobilier, immobilier => immobilier.image)
  immobilier: Immobilier;
}
