import { getCustomRepository } from 'typeorm';

import { DetailsUsers } from '../DetailsUsers/DetailsUsers.entity';
import { DetailsUsersRepository } from '../DetailsUsers/DetailsUsers.repository';
import { Localisation } from '../Localisation/Localisation.entity';
import { LocalisationRepository } from '../Localisation/Localisation.repository';
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
    this.localisationRepository = getCustomRepository(LocalisationRepository);
    this.detailsUsersRepository = getCustomRepository(DetailsUsersRepository);
  }

  private static instance: InscriptionService;

  private usersRepository: UsersRepository;
  private localisationRepository: LocalisationRepository;
  private detailsUsersRepository: DetailsUsersRepository;

  // Recupère les données de la table user et detailsUsers correspondant à un id donné
  // public async getInscription(id: string) {
  //   const users = await this.usersRepository.findOneOrFail(id, {
  //     relations: ['detailsUsers'],
  //   });
  //   return users;
  // }

  /**
   * Insert a User in Db
   *
   * @param users
   * @returns Resolves with Users inserted
   */
  public async createUsers(users: any) {
    const usersToInsert: Partial<Users> = {
      ...users,
    };
    return this.usersRepository.save(usersToInsert);
  }

  /**
   * Retrieve all userss from Db
   *
   * @returns Resolves with the list of all users in Db
   */
  public async getAll(mail: string) {
    return this.usersRepository.find({ mail });
  }

  // password = new RegExp('^[1-9]d{0,2}$');

  /**
   * Insert a localisation in Db
   *
   * @param localisation
   * @returns Resolves with Localisation inserted
   */
  public async createLocalisation(localisation: any) {
    const localisationToInsert: Partial<Localisation> = {
      ...localisation,
    };
    return this.localisationRepository.save(localisationToInsert);
  }

  /**
   * Insert a DetailsUsers in Db
   *
   * @param detailsUsers
   * @returns Resolves with DetailsUsers inserted
   */
  public async createDetailsUsers(detailsUsers: any) {
    const detailsUsersToInsert: Partial<DetailsUsers> = {
      ...detailsUsers,
    };
    return this.detailsUsersRepository.save(detailsUsersToInsert);
  }
}
