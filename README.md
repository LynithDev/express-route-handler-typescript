# Express Route Handler made with TypeScript
This is a simple Route Handler made with TypeScript for ExpressJS.

## Setup
1. Clone / Download / Use the template
2. Open the folder in a shell
3. Run `npm i` and wait for the modules to download
4. `npm run dev`
5. Visit https://localhost:5050/

## Example Route
Note: Routes can be placed anywhere inside `src/routes/impl/`. It can be placed inside subfolders as it searches and imports them recursively
```ts
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
```
The route **needs** to extend Route and also export an instance of itself. You then have to add a constructor which follows the `RouteOption` type.

## TODO
Routes: Make `private` option functional
Routes: Make `redirects` option functional
