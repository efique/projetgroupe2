import { Request, Response, Router } from 'express';

import { IRouteInterface } from './../tools/route.interface';
import { ConnexionService } from './Connexion.service';
// import { Users } from './Users.entity';
// import { UsersRepository } from './Users.repository';

class PasseportController{
// tslint:disable-next-line:align
passport; .use(new BearerStrategy (function(token, done) {
    Users.findOne({ token }, function(err, Users) {
      if (err) {
        return done(err);
      }
      if (!Users) {
        return done(null, false);
      }
      return done(null, Users, { scope: 'read' });
    });
  }),      ;
)
}
// tslint:disable-next-line:max-classes-per-file
export class ConnexionController {
  constructor() {
    this.router = Router();
    this.connexionService = ConnexionService.getInstance;
  }
  connexionService: () => ConnexionService;
  private router: Router;
  /**
   * Define and return the router of ConnexionController.
   *
   * @returns Resolves with the router and its routes
   */
  async getRoutes() {
    const routes: IRouteInterface[] = [
      { path: '/', method: 'get', actions: [this.create] },
    ];

    routes.forEach(item => {
      const { path, method, actions } = item;
      this.router[method](path, ...actions.map(action => action.bind(this)));
    });

    return this.router;
  }

  /**
   * Get info of user from Db
   *
   * @param req
   * @param res
   * @returns with the created Connexion
   */
  private async create(req: Request, res: Response) {
    const user = await this.connexionService().GetUsers(req.body);
    await this.connexionService().GetUsers({
      ...req.body,
      users: user,
    });
  }
}
