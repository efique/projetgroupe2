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
    this.inscriptionRepository = getCustomRepository(InscriptionRepository);
  }
  private static instance: InscriptionService;

  private inscriptionRepository: InscriptionRepository;

  public async getInscription(id: string) {
    const inscription = await this.inscriptionRepository.findOneOrFail(id);
    return inscription;
  }

  /**
   * Retrieve all inscriptions from Db
   *
   * @returns Resolves with the list of all inscriptions in Db
   */
  public async getAll() {
    return this.inscriptionRepository.find();
  }

  /**
   * Insert a inscription in Db
   *
   * @param inscription
   * @returns Resolves with Inscription inserted
   */
  public async create(inscription: any) {
    const inscriptionToInsert: Partial<Inscription> = {
      ...inscription,
    };
    return this.inscriptionRepository.save(inscriptionToInsert);
  }
}
