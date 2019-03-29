import { EntityRepository, Repository } from 'typeorm';

import { Users } from './Users.entity';

@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {}
