require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());

process.env.NODE_PATH = (process.env.NODE_PATH || '')
    .split(path.delimiter)
    .filter((folder) => folder && !path.isAbsolute(folder))
    .map((folder) => path.resolve(appDirectory, folder))
    .join(path.delimiter);

const moduleFileExtensions = ['ts', 'js'];

module.exports.moduleFileExtensions = moduleFileExtensions;
