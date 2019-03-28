import { getCustomRepository } from 'typeorm';

import { DetailsUsers } from '../DetailsUsers/DetailsUsers.entity';
import { DetailsUsersRepository } from '../DetailsUsers/DetailsUsers.repository';

export class DetailsUsersService {
  getdetailsUsers(params: any): any {
    throw new Error('Method not implemented.');
  }
  /**
   * SINGLETON PATTERN
   * @see https://en.wikipedia.org/wiki/Singleton_pattern
   */
  public static getInstance() {
    if (!this.instance) {
      this.instance = new DetailsUsersService();
    }
    return this.instance;
  }

  constructor() {
    this.detailsUsersRepository = getCustomRepository(DetailsUsersRepository);
  }
  private static instance: DetailsUsersService;

  private detailsUsersRepository: DetailsUsersRepository;

  /**
   * Insert a DetailsUsers in Db
   *
   * @param detailsUsers
   * @returns Resolves with DetailsUsers inserted
   */
  public async create(agence: any) {
    const detailsUsersToInsert: Partial<DetailsUsers> = {
      ...agence,
    };
    return this.detailsUsersRepository.save(detailsUsersToInsert);
  }

  public async delete(detailsUsersId: string) {
    return this.detailsUsersRepository.delete(detailsUsersId);
  }

  public async getAgence(detailsUsersId: string) {
    return this.detailsUsersRepository.findOne(detailsUsersId);
  }

  /**
   * Retrieve all detailsUsers from Db
   *
   * @returns Resolves with the list of all detailsUsers in Db
   */
  public async getAll() {
    return this.detailsUsersRepository.find();
  }

  public async update(body: Partial<DetailsUsers>, detailsUsersId: string) {
    const detailsUsersToUpdate = await this.detailsUsersRepository.findOne(
      detailsUsersId,
    );
    if (!detailsUsersToUpdate) {
      'Cet id n\'existe pas';
    }
    return this.detailsUsersRepository.save({
      ...detailsUsersToUpdate,
      ...body,
    });
  }
}
