import { createConnection } from 'typeorm';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import 'express-async-errors';
import marketRouter from './routes/market';
import usersRouter from './routes/users';

createConnection()
  .then(async (connection) => {
    // const users = await connection.manager.find(User);
    // console.log('Loaded users: ', users);
    // const userRepository = connection.getRepository(User);
  })
  .catch((err) => console.log(err));
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(helmet());
app.use('/', usersRouter);
app.use('/market', marketRouter);

app.use(
  (
    error: any,
    req: any,
    res: { sendStatus: (arg0: number) => void },
    next: any
  ) => {
    console.error(error);
    res.sendStatus(500);
  }
);

app.listen(8080);

export default app;
