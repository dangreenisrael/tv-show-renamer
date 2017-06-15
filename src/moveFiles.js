const mv = require('mv');
const {List} = require('immutable');

/**
 * @param {Object[]} paths
 * @param {string} paths[].sourcePath
 * @param {string|number} paths[].destinationPath
 */

module.exports = paths =>
  new Promise(resolve => {
    const failedFiles = [];
    const handleEachFile = ({sourcePath, destinationPath}) =>
      new Promise(resolve => {
        mv(sourcePath, destinationPath, {mkdirp: true, clobber: false}, function(err) {
          if (err) {
            failedFiles.push(err);
          }
          resolve();
        });
      });
    Promise.all(paths.map(handleEachFile)).then(() => {
      resolve({errors: List(failedFiles)});
    });
  });
