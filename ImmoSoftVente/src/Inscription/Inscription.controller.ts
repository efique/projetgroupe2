import { Request, Response, Router } from 'express';

import { DetailsUsersService } from '../DetailsUsers/DetailsUsers.service';
import { UsersService } from '../Users/Users.service';
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
      {
        path: '/:inscriptionId',
        method: 'get',
        actions: [this.getInscription],
      },
      { path: '/', method: 'get', actions: [this.getAll] },
    ];

    routes.forEach(item => {
      const { path, method, actions } = item;
      this.router[method](path, ...actions.map(action => action.bind(this)));
    });

    return this.router;
  }

  private async getInscription(req: Request, res: Response) {
    res.json({
      results: await this.inscriptionService().getInscription(req.params),
    });
  }

  /**
   * Return a list of all inscriptions from Db
   *
   * @param req
   * @param res
   * @returns Resolves with the list of all Inscriptions
   */
  private async getAll(req: Request, res: Response) {
    res.json({ results: await this.inscriptionService().getAll() });
  }

  /**
   * Insert new Inscription in Db
   *
   * @param req
   * @param res
   * @returns with the created Inscription
   */
  private async create(req: Request, res: Response) {
    res.json({ inserted: await this.inscriptionService().create(req.body) });
  }
}
