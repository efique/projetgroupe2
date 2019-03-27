import bodyParser from 'body-parser';
import chalk from 'chalk';
import express from 'express';

// import { CourseController } from './course/course.controller';
import logger from './logger.tools';
// import { NoteController } from './note/note.controller';
// import { RoomController } from './room/room.controller';
import { setupDb } from './setup-db';
// import { SubjectController } from './subject/subject.controller';
// import { UserController } from './user/user.controller';

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

  // const userRoutes = await new UserController().getRoutes();
  // app.use('/user', userRoutes);

  // const noteRoutes = await new NoteController().getRoutes();
  // app.use('/note', noteRoutes);

  // const roomRoutes = await new RoomController().getRoutes();
  // app.use('/room', roomRoutes);

  // const subjectRoutes = await new SubjectController().getRoutes();
  // app.use('/subject', subjectRoutes);

  // define application port
  app.listen(3015);

  global.console.log(chalk.green('----- Server up! -----\n'));
}

// start application
bootstrap();
