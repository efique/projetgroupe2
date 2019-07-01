import { Request, Response, Router } from 'express';

import { IRouteInterface } from './../tools/route.interface';
import { UsersService } from './Users.service';

export class UsersController {
  constructor() {
    this.router = Router();
    this.usersService = UsersService.getInstance;
  }
  private router: Router;

  private usersService: () => UsersService;

  /**
   * Define and return the router of UsersController.
   *
   * @returns Resolves with the router and its routes
   */
  async getRoutes() {
    const routes: IRouteInterface[] = [
      { path: '/', method: 'post', actions: [this.create] },
      { path: '/update/:usersId', method: 'put', actions: [this.update] },
      { path: '/:usersId', method: 'get', actions: [this.getUsers] },
      { path: '/get', method: 'get', actions: [this.getAll] },
      { path: '/delete/:usersId', method: 'delete', actions: [this.delete] },
    ];

    routes.forEach(item => {
      const { path, method, actions } = item;
      this.router[method](path, ...actions.map(action => action.bind(this)));
    });

    return this.router;
  }

  /**
   * Insert new Users in Db
   *
   * @param req
   * @param res
   * @returns with the created Users
   */
  private async create(req: Request, res: Response) {
    res.json({ inserted: await this.usersService().create(req.body) });
  }

  private async delete(req: Request, res: Response) {
    res.json({ results: await this.usersService().delete(req.params) });
  }

  /**
   * Return a list of all userss from Db
   *
   * @param req
   * @param res
   * @returns Resolves with the list of all Userss
   */
  private async getAll(req: Request, res: Response) {
    res.json({ results: await this.usersService().getAll() });
  }

  private async getUsers(req: Request, res: Response) {
    res.json({ results: await this.usersService().getUsers(req.params) });
  }

  private async update(req: Request, res: Response) {
    res.json({
      results: await this.usersService().update(req.body, req.params.usersId),
    });
  }
}
