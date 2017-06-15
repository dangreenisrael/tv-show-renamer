const {List} = require('immutable');
const fs = require('fs');
const recursiveReadSync = require('recursive-readdir-sync');

const fileNames = directory => {
  try {
    return recursiveReadSync(directory);
  } catch (err) {
    if (err.errno === 34) {
      throw `The source directory does not exist - ${directory}`;
    } else {
      //something unrelated went wrong, rethrow
      throw err;
    }
  }
};

module.exports = directory => List(fileNames(directory));
