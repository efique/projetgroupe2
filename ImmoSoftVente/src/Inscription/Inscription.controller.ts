import { Request, Response, Router } from 'express';

import { IRouteInterface } from './../tools/route.interface';
import { InscriptionService } from './Inscription.service';

export class InscriptionController {
  constructor() {
    this.router = Router();
    this.inscriptionService = InscriptionService.getInstance;
  }

  private inscriptionService: () => InscriptionService;
  private router: Router;

  /**
   * Define and return the router of InscriptionController.
   *
   * @returns Resolves with the router and its routes
   */
  async getRoutes() {
    const routes: IRouteInterface[] = [
      { path: '/', method: 'post', actions: [this.create] },
    ];

    routes.forEach(item => {
      const { path, method, actions } = item;
      this.router[method](path, ...actions.map(action => action.bind(this)));
    });

    return this.router;
  }

  /**
   * Insert new User in Db
   *
   * @param req
   * @param res
   * @returns with the created Inscription
   */
  private async create(req: Request, res: Response) {
    const users = await this.inscriptionService().getAll(req.body.mail);
    if (users.length === 0) {
      const user = await this.inscriptionService().createUsers(req.body);
      const localisation = await this.inscriptionService().createLocalisation(
        req.body,
      );
      await this.inscriptionService().createDetailsUsers({
        ...req.body,
        users: user,
        localisation,
      });
      return res.json();
    } else {
      return res.status(500).json({ message: 'This mail already exist.' });
    }
  }
}
