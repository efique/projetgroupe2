import { Request, Response, Router } from 'express';

import { IRouteInterface } from '../tools/route.interface';
import { ImmobilierService } from './Immobilier.service';

export class ImmobilierController {
  constructor() {
    this.router = Router();
    this.immobilierService = ImmobilierService.getInstance;
  }

  private immobilierService: () => ImmobilierService;
  private router: Router;

  /**
   * Define and return the router of ImmobilierController.
   *
   * @returns Resolves with the router and its routes
   */
  async getRoutes() {
    const routes: IRouteInterface[] = [
      { path: '/', method: 'post', actions: [this.create] },
      { path: '/get', method: 'get', actions: [this.getImmobilier] },
      { path: '/getLoca', method: 'get', actions: [this.getLocalisation] },
    ];

    routes.forEach(item => {
      const { path, method, actions } = item;
      this.router[method](path, ...actions.map(action => action.bind(this)));
    });

    return this.router;
  }

  /**
   * Insert new Immobilier in Db
   *
   * @param req
   * @param res
   * @returns with the created Immobilier
   */
  private async create(req: Request, res: Response) {
    const immobiliers = await this.immobilierService().getAll();

    if (immobiliers.length === 0) {
      await this.immobilierService().createImmobilier({
        ...req.body,
      });
      return res.json();
    } else {
      return res
        .status(500)
        .json({ message: 'This immobilier already exist.' });
    }
  }

  /**
   * Retrieve all users from Db
   *
   * @param req
   * @param res
   * @returns Resolves with the list of all Users
   */
  private async getImmobilier(req: Request, res: Response) {
    res.json({
      details: await this.immobilierService().getDetailsId(),
      localisations: await this.immobilierService().getAllLocalisations(),
    });
  }

  private async getLocalisation(req: Request, res: Response) {
    res.json({ 
      localisation: await this.immobilierService().getAllLocalisations()
    });
  }
}
