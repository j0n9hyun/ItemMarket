import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import 'express-async-errors';
import marketRouter from './routes/market';
// import './index'
import './index';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use('/market', marketRouter);

app.use((error: any, req: any, res: { sendStatus: (arg0: number) => void; }, next: any) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(8080);

export default app;
