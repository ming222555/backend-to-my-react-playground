import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';

import morgan from 'morgan'; // cf winston
import * as winston from '../config/winston';

import * as cartsRoutes from './routes/carts';

const app = express();

app.use(morgan('combined', { stream: new winston.LoggerStream() }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    );
    next();
});

app.use('/api/carts', cartsRoutes.router);


app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    let msg = 'Server Error';

    winston.logger.error(`${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip} - ${err.src || ''}`);

    return res.status(500).json({
        message: msg
    });

});

export default app;