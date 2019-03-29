import { getCustomRepository } from 'typeorm';

import { Users } from '../Users/Users.entity';
import { UsersRepository } from '../Users/Users.repository';

export class ConnexionService {
  /**
   * SINGLETON PATTERN
   * @see https://en.wikipedia.org/wiki/Singleton_pattern
   */
  public static getInstance() {
    if (!this.instance) {
      this.instance = new ConnexionService();
    }
    return this.instance;
  }

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  private static instance: ConnexionService;

  private usersRepository: UsersRepository;

  // Recupère les données de la table user et detailsUsers correspondant à un id donné
  // public async getConnexion(id: string) {
  //   const users = await this.usersRepository.findOneOrFail(id, {
  //     relations: ['detailsUsers'],
  //   });
  //   return users;
  // }

  /**
   * Recuperz les info du user dans la  db
   *
   * @param users
   * @returns Connexion with Users inserted
   */
  public async GetUsers(users: any) {
    const usersToGet: Partial<Users> = {
      ...users,
    };
    return this.usersRepository.save(usersToGet);
  }
}
