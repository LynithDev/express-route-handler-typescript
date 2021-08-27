import { Request, Response } from 'express';
import Route from '../Route';

class ExampleRoute extends Route {
    constructor() {
        super({
            name: 'ExampleRoute',
            type: 'get',
            url: '/',
        });
    }

    run(req: Request, res: Response) {
        res.send('Hello World');
    }
}

export default new ExampleRoute();
