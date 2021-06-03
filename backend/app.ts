import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import 'express-async-errors';
import marketRouter from './routes/market';
import usersRouter from './routes/users';
import { dbConnect } from './models/index';

const app = express();

dbConnect();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
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
