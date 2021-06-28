import { createConnection } from 'typeorm';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
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

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
<<<<<<< HEAD
app.use(cors(corsOptions));
=======
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
>>>>>>> feature-test
app.use(helmet());
app.use(cookieParser());
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
