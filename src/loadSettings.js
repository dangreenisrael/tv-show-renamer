const yaml = require('js-yaml');
const fs = require('fs');
const appDir = process.cwd();
const {Map} = require('immutable');
const isTest = process.env.NODE_ENV === 'test';
const settingsFileLocation = isTest ? `${appDir}/tests/settings.yml` : `${appDir}/settings.yml`;

module.exports = Map(yaml.safeLoad(fs.readFileSync(settingsFileLocation, 'utf8')));
