import { EntityRepository, Repository } from 'typeorm';

import { Immobilier } from './Immobilier.entity';

@EntityRepository(Immobilier)
export class ImmobilierRepository extends Repository<Immobilier> {}
