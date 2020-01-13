import {encode,decode} from '../secret/utils/index.js'
import {readFileSync,existsSync} from 'fs'


export function encodeAll (...filesPath) {
    let textsObject = {};
    filesPath.forEach(filePath => {
        if(existsSync(filePath)) {
            textsObject[filePath] = encode(readFileSync(filePath).toString());
        } else {
            textsObject[filePath] = '';
        }
    });
    return textsObject;
}

export function decodeAll (...filesPath) {
    let textsObject = {};
    filesPath.forEach(filePath => {
        if(existsSync(filePath)) {
            textsObject[filePath] = decode(readFileSync(filePath).toString());
        } else {
            textsObject[filePath] = '';
        }
    });
    return textsObject;
}
