import { getCustomRepository } from 'typeorm';

import { Users } from './Users.entity';
import { UsersRepository } from './Users.repository';

export class UsersService {
  /**
   * SINGLETON PATTERN
   * @see https://en.wikipedia.org/wiki/Singleton_pattern
   */
  public static getInstance() {
    if (!this.instance) {
      this.instance = new UsersService();
    }
    return this.instance;
  }

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }
  private static instance: UsersService;

  private usersRepository: UsersRepository;

  /**
   * Insert a users in Db
   *
   * @param users
   * @returns Resolves with Users inserted
   */
  public async create(users: any) {
    const usersToInsert: Partial<Users> = {
      ...users,
    };
    return this.usersRepository.save(usersToInsert);
  }

  public async delete(usersId: string) {
    return this.usersRepository.delete(usersId);
  }

  /**
   * Retrieve all userss from Db
   *
   * @returns Resolves with the list of all userss in Db
   */
  public async getAll() {
    return this.usersRepository.find();
  }

  public async getUsers(usersId: string) {
    return this.usersRepository.findOne(usersId);
  }

  public async update(body: Partial<Users>, usersId: string) {
    const usersToUpdate = await this.usersRepository.findOne(usersId);
    if (!usersToUpdate) {
      'Cet id n\'existe pas';
    }
    return this.usersRepository.save({ ...usersToUpdate, ...body });
  }
}
