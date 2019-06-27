import { getCustomRepository } from 'typeorm';
import { DetailsUsers } from '../DetailsUsers/DetailsUsers.entity';
import { DetailsUsersRepository } from '../DetailsUsers/DetailsUsers.repository';
import { AgenceRepository } from '../Agence/Agence.repository';
import { ImmobilierRepository } from './Immobilier.repository';
import { LocalisationRepository } from '../Localisation/Localisation.repository';
import { ImageRepository } from './Image.repository';
import { Immobilier } from './Immobilier.entity';
import { Localisation } from '../Localisation/Localisation.entity';
import { Image } from './Image.entity';

export class ImmobilierService {
  /**
   * SINGLETON PATTERN
   * @see https://en.wikipedia.org/wiki/Singleton_pattern
   */
  public static getInstance() {
    if (!this.instance) {
      this.instance = new ImmobilierService();
    }
    return this.instance;
  }

  constructor() {
    this.agenceRepository = getCustomRepository(AgenceRepository);
    this.detailsUsersRepository = getCustomRepository(DetailsUsersRepository);
    this.immobilierRepository = getCustomRepository(ImmobilierRepository);
    this.localisationRepository = getCustomRepository(LocalisationRepository);
    this.imageRepository = getCustomRepository(ImageRepository);
  }

  private static instance: ImmobilierService;

  private agenceRepository: AgenceRepository;
  private detailsUsersRepository: DetailsUsersRepository;
  private immobilierRepository: ImmobilierRepository;  
  private localisationRepository: LocalisationRepository;
  private imageRepository: ImageRepository;

  /**
   * Insert an Immobilier in Db
   *
   * @param Immobilier
   * @returns Resolves with Immobilier inserted
   */
  public async createImmobilier(immobilier: any) {
    const immobilierToInsert: Partial<Immobilier> = {
      ...immobilier,
    };
    return this.immobilierRepository.save(immobilierToInsert);
  }

    /**
   * Retrieve all immobilier from Db
   *
   * @returns Resolves with the list of all users in Db
   */
  public async getAll() {
    return this.immobilierRepository.find();
  }

      /**
   * Retrieve all immobilier from Db
   *
   * @returns Resolves with the list of all users in Db
   */
  public async getLocalisationId(postal: string) {
    const localisation = await this.localisationRepository.findOneOrFail(postal);
    return localisation.id;
  }

        /**
   * Retrieve all immobilier from Db
   *
   * @returns Resolves with the list of all users in Db
   */
  public async getAgenceId(localisation: number) {
    const agence = await this.agenceRepository.findOneOrFail(localisation);
    return agence.id;
  }

        /**
   * Retrieve all localisations from Db
   *
   * @returns Resolves with the list of all users in Db
   */
  public async getDetailsId() {
    const details = await this.detailsUsersRepository.findOneOrFail();
    return details.id;
  }

      /**
   * Retrieve all localisations from Db
   *
   * @returns Resolves with the list of all users in Db
   */
  public async getAllLocalisations() {
    return this.localisationRepository.find();
  }

  /**
   * Retrieve all images from Db
   *
   * @returns Resolves with the list of all users in Db
   */
  public async getAllImage() {
    return this.imageRepository.find();
  }

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

    /**
   * Insert an image in Db
   *
   * @param image
   * @returns Resolves with Image inserted
   */
  public async createImage(image: any) {
    const imageToInsert: Partial<Image> = {
      ...image,
    };
    return this.imageRepository.save(imageToInsert);
  }
}
