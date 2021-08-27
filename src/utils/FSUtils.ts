import fs from 'fs';
import { join } from 'path';

export const readDirRecursive = (path: string) => {
    let list: string[] = [];
    const files = fs.readdirSync(path);
    let stats;
    files.forEach((file) => {
        stats = fs.lstatSync(join(path, file));
        if (stats.isDirectory()) {
            list = list.concat(readDirRecursive(join(path, file)));
        } else {
            list.push(join(path, file));
        }
    });

    return list;
};
