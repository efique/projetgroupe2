import { getCustomRepository } from 'typeorm';

import { DetailsUsers } from '../DetailsUsers/DetailsUsers.entity';
import { DetailsUsersRepository } from '../DetailsUsers/DetailsUsers.repository';
import { Users } from '../Users/Users.entity';
import { UsersRepository } from '../Users/Users.repository';

export class InscriptionService {
  /**
   * SINGLETON PATTERN
   * @see https://en.wikipedia.org/wiki/Singleton_pattern
   */
  public static getInstance() {
    if (!this.instance) {
      this.instance = new InscriptionService();
    }
    return this.instance;
  }

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  private static instance: InscriptionService;

  private usersRepository: UsersRepository;

  public async getInscription(id: string) {
    const users = await this.usersRepository.findOneOrFail(id, {
      relations: ['detailsUsers'],
    });
    return users;
  }

  /**
   * Retrieve all inscriptions from Db
   *
   * @returns Resolves with the list of all inscriptions in Db
   */
  public async getAll() {
    return this.usersRepository.find();
  }

  /**
   * Insert a inscription in Db
   *
   * @param inscription
   * @returns Resolves with Inscription inserted
   */
  public async create(inscription: any) {
    const usersToInsert: Partial<Users> = {
      ...inscription,
    };
    return this.usersRepository.save(usersToInsert);
  }
}
