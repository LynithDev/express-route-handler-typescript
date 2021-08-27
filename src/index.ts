import express, { Request, Response } from 'express';
import { initRoutes, routeListener } from './routes/RouteHandler';

export const app = express();
export const port = 5050;

const init = () => new Promise((resolve, reject) => {
    initRoutes().then(() => routeListener());
});

init();
