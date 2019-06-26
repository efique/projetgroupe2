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
      { path: '/', method: 'post', actions: [this.create]},
      { path: '/get', method: 'get', actions: [this.getImmobilier]},
      { path: '/getLoca', method: 'get', actions: [this.getLocalisation]}
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
    const agences = await this.immobilierService().getAllAgence(req.body.postal);
    if (immobiliers.length === 0) {
      const detailsUsers = await this.immobilierService().createDetailsUsers(req.body);
      const localisation = await this.immobilierService().createImage(
        req.body,
      );
      await this.immobilierService().createImmobilier({
        ...req.body,
        detailsUsers,
        localisation,
      });
      return res.json();
    } else {
      return res.status(500).json({ message: 'This mail already exist.' });
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
      details: await this.immobilierService().getAllDetails(),
      localisations: await this.immobilierService().getAllLocalisations()
    });
  }

  private async getLocalisation(req: Request, res: Response) {
    res.json({ 
      localisation: await this.immobilierService().getAllAgence(req.body.postal)
    });
  }
}
