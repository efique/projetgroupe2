import { EntityRepository, Repository } from 'typeorm';

import { DetailsUsers } from './DetailsUsers.entity';

@EntityRepository(DetailsUsers)
export class DetailsUsersRepository extends Repository<DetailsUsers> {}
