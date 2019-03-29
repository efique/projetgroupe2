import { Request, Response, Router } from 'express';

import { IRouteInterface } from './../tools/route.interface';
import { ConnexionService } from './Connexion.service';

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
    var passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy;

    passport.use(
      new LocalStrategy(function(username, password, done) {
        User.findOne({ username: username }, function(err, user) {
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
          }
          if (!user.validPassword(password)) {
            return done(null, false, { message: 'Incorrect password.' });
          }
          return done(null, user);
        });
      }),
    );
    passport.use(
      new BearerStrategy(function(token, done) {
        User.findOne({ token: token }, function(err, user) {
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false);
          }
          return done(null, user, { scope: 'read' });
        });
      }),
    );
  }
}
