import { Request, Response, Router } from 'express';
import jwt from 'jsonwebtoken';

import { IRouteInterface } from '../tools/route.interface';
import { AuthService } from './auth.service';

export class AuthController {
  constructor() {
    this.router = Router();
    this.authService = AuthService.getInstance;
  }

  private authService: () => AuthService;
  private router: Router;

  /**
   * Define and return the router of AuthController.
   *
   * @returns Resolves with the router and its routes
   */
  async getRoutes() {
    const routes: IRouteInterface[] = [
      { path: '/signin', method: 'post', actions: [this.signIn] },
      { path: '/signup', method: 'post', actions: [this.signUp] },
      { path: '/loggedIn', method: 'get', actions: [this.loggedIn] },
    ];

    routes.forEach(item => {
      const { path, method, actions } = item;
      this.router[method](path, ...actions.map(action => action.bind(this)));
    });

    return this.router;
  }

  /**
   * Sign in a user
   *
   * @param req
   * @param res
   * @returns with the created Auth
   */
  private async signIn(req: Request, res: Response) {
    const user = await this.authService().signIn(
      req.body.mail,
      req.body.password,
    );

    if (!user) {
      res.status(401).json({ status: 'Unauthorized' });
    }

    const token = jwt.sign({ mail: user!.mail }, 'secret', {
      expiresIn: 86400,
    });

    res.json({
      token,
      user,
    });
  }

  /**
   * Return a list of all auths from Db
   *
   * @param req
   * @param res
   * @returns Resolves with the list of all Auths
   */
  private async signUp(req: Request, res: Response) {
    const users = await this.authService().getAll(req.body.mail);
    if (users.length === 0) {
      const user = await this.authService().signUp(
        req.body.mail,
        req.body.password,
      );
      const token = jwt.sign({ mail: user.mail }, 'secret', {
        expiresIn: 86400,
      });

      res.json({
        token,
        users,
      });
      const localisation = await this.authService().createLocalisation(
        req.body,
      );
      await this.authService().createDetailsUsers({
        ...req.body,
        users: user,
        localisation,
      });
      return res.json();
    } else {
      return res.status(500).json({ message: 'This mail already exist.' });
    }
  }

  public async loggedIn(req: any, res: any, next: any) {
    const users = await this.authService().getAll(req.body.mail);
    // const token =
    //   req.body.token || req.query.token || req.headers['x-access-token'];
    // tslint:disable-next-line:no-console
    console.log(req.body.token);
    // tslint:disable-next-line:no-console
    console.log(req.query.token);
    // tslint:disable-next-line:no-console
    console.log(req.headers['x-access-token']);
    if (req.body.length !== 0) {
      if (users) {
        // tslint:disable-next-line:no-console
        console.log(users);
      }
      next();
    } else {
      res.redirect('http://localhost4200/connexion');
    }
  }
}
