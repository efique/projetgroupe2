import { EntityRepository, Repository } from 'typeorm';

import { Image } from './Image.entity';

@EntityRepository(Image)
export class ImageRepository extends Repository<Image> {}
