/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express';

export type RouteOptions = {
    name: string,
    url: string,
    type: 'all' | 'get' | 'post' | 'put' | 'delete',
    private?: boolean,
    redirects?: string[],
}

export default abstract class Route {
    constructor(private opts: RouteOptions) {}

    get options() {
        return this.opts;
    }

    abstract run(req: Request, res: Response);
}
