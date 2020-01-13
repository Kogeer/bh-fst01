import {encode,decode} from '../secret/utils/index.js'
import fs from 'fs'


export function encodeAll (...filesPath) {
    let textsObject = {};
    filesPath.forEach(filePath => {
        if(fs.existsSync(filePath)) {
            textsObject[filePath] = encode(fs.readFileSync(filePath).toString());
        } else {
            textsObject[filePath] = '';
        }
    });
    return textsObject;
}

export function decodeAll (...filesPath) {
    let textsObject = {};
    filesPath.forEach(filePath => {
        if(fs.existsSync(filePath)) {
            textsObject[filePath] = decode(fs.readFileSync(filePath).toString());
        } else {
            textsObject[filePath] = '';
        }
    });
    return textsObject;
}
