import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { notFound, errorConverter, errorHandler } from './middlewares/errorHandler';
import routes from './router';

const app = express();

// set CORS headers
app.use(cors({ origin: '*', allowedHeaders: ['X-Requested-With'] }));

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// add router
app.use(routes);

// error handling
app.use(notFound);
app.use(errorConverter);
app.use(errorHandler);

export default app;
