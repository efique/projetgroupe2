import bodyParser from 'body-parser';
import chalk from 'chalk';
import express from 'express';

// import { CourseController } from './course/course.controller';
import { AgenceController } from './Agence/Agence.controller';
import { LocalisationController } from './Localisation/Localisation.controller';
import logger from './logger.tools';
// import { NoteController } from './note/note.controller';
// import { RoomController } from './room/room.controller';
import { setupDb } from './setup-db';

async function bootstrap() {
  // create db connection
  await setupDb();

  // initialize express app
  const app = express();

  // set the body parser
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
  app.use(bodyParser.json());

  // call custom middleware for logging globally
  app.use(logger);

  // define a GET route on '/' pattern
  app.get('/', (req: express.Request, res: express.Response) => {
    return res.json({ message: 'Hello world !' });
  });

  // use custom controller on '/course' pattern
  // const coursesRoutes = await new CourseController().getRoutes();
  // app.use('/course', coursesRoutes);

  const agenceRoutes = await new AgenceController().getRoutes();
  app.use('/agence', agenceRoutes);

  // const noteRoutes = await new NoteController().getRoutes();
  // app.use('/note', noteRoutes);

  // const roomRoutes = await new RoomController().getRoutes();
  // app.use('/room', roomRoutes);

  const localisationRoutes = await new LocalisationController().getRoutes();
  app.use('/localisation', localisationRoutes);

  // define application port
  app.listen(3015);

  global.console.log(chalk.green('----- Server up! -----\n'));
}

// start application
bootstrap();
