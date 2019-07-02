import bcrypt from 'bcrypt';

import { getCustomRepository } from 'typeorm';
import { DetailsUsers } from '../DetailsUsers/DetailsUsers.entity';
import { DetailsUsersRepository } from '../DetailsUsers/DetailsUsers.repository';
import { Localisation } from '../Localisation/Localisation.entity';
import { LocalisationRepository } from '../Localisation/Localisation.repository';
import { Users } from '../Users/Users.entity';
import { UsersRepository } from '../Users/Users.repository';
import { UsersService } from '../Users/Users.service';

export class AuthService {
  /**
   * SINGLETON PATTERN
   * @see https://en.wikipedia.org/wiki/Singleton_pattern
   */
  public static getInstance() {
    if (!this.instance) {
      this.instance = new AuthService();
    }
    return this.instance;
  }

  constructor() {
    this.userService = UsersService.getInstance();
    this.usersRepository = getCustomRepository(UsersRepository);
    this.localisationRepository = getCustomRepository(LocalisationRepository);
    this.detailsUsersRepository = getCustomRepository(DetailsUsersRepository);
  }
  private static instance: AuthService;

  private usersRepository: UsersRepository;
  private localisationRepository: LocalisationRepository;
  private detailsUsersRepository: DetailsUsersRepository;
  private userService: UsersService;

  /**
   * Sign in a user
   *
   * @param user
   * @returns Resolves with Users inserted
   */
  public async signIn(mail: string, password: string) {
    const findOneByEmail = this.usersRepository.findOne({ where: { mail } });
    const user = await findOneByEmail;

    const isMatched = await bcrypt.compare(
      password,
      (user && user.password) || '',
    );
    if (!user || !isMatched) {
      return undefined;
    }

    return user;
  }

  /**
   * Sign up a user
   *
   * @param user
   * @returns Resolves with Users inserted
   */
  public async signUp(mail: string, password: string) {
    return this.userService.create({
      mail,
      password: await bcrypt.hash(password, 10),
    });
  }

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
   * Retrieve all users from Db
   *
   * @returns Resolves with the list of all users in Db
   */
  public async getAll(mail: string) {
    return this.usersRepository.find({ mail });
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
   * Return true if mail from JWT payload return a valid mail of user, else false
   *
   * @param payload
   */
  public async validateUsers(payload: { mail: string }) {
    return (await this.userService.findOneByEmail(payload.mail)) || false;
  }
}
