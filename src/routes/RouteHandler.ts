/* eslint-disable no-async-promise-executor */
import path from 'path';
import { app, port } from '..';
import { readDirRecursive } from '../utils/FSUtils';
import Route from './Route';

export const getRoutePath = path.join(__dirname, 'impl');
export const routes: Route[] = [];
const files = readDirRecursive(getRoutePath);

export const initRoutes = () => new Promise(async (resolve, reject) => {
    console.log('Initializing Routes 1/2');
    await files.forEach(async (file) => {
        if (file.endsWith('.js') || file.endsWith('.ts')) {
            const route: Route = (await import(file)).default;
            routes.push(route);
        }
    });
    resolve('');
});

export const routeListener = () => new Promise((resolve, reject) => {
    console.log('Initializing Routes 2/2');

    routes.forEach((route) => {
        switch (route.options.type) {
            default:
                break;
            case 'get':
                app.get(route.options.url, (req, res) => {
                    route.run(req, res);
                });
                break;
            case 'post':
                app.post(route.options.url, (req, res) => {
                    route.run(req, res);
                });
                break;
            case 'put':
                app.put(route.options.url, (req, res) => {
                    route.run(req, res);
                });
                break;
            case 'all':
                app.all(route.options.url, (req, res) => {
                    route.run(req, res);
                });
                break;
            case 'delete':
                app.delete(route.options.url, (req, res) => {
                    route.run(req, res);
                });
                break;
        }
    });

    app.listen(port, () => {
        console.log(`App listening on http://localhost:${port}/`);
    });

    resolve('');
});
