const getFileNames = require('../src/getFileNames');
const mockFs = require('mock-fs');
const {List} = require('immutable');

afterAll(() => {
  mockFs.restore();
});
beforeAll(() => {
  mockFs({
    watchFolder: {
      'show1.txt': 'show 1',
      show2folder: {
        'show2.txt': 'show 2'
      },
      'empty-dir': {
        /** empty directory */
      }
    }
  });
});

describe('File Names', () => {
  it('should not throw if the source folder exists', () => {
    expect(() => getFileNames('watchFolder')).not.toThrow();
  });
  it('should throw if the source folder does exist', () => {
    expect(() => getFileNames('foo')).toThrowError('The source directory does not exist - foo');
  });
  it('should throw on some other error', () => {
    expect(() => getFileNames(() => {})).toThrow();
  });

  it('should give a list of all files, recursively', () => {
    const fileNames = getFileNames('watchFolder');
    expect(fileNames).toMatchObject(
      List(['watchFolder/show1.txt', 'watchFolder/show2folder/show2.txt'])
    );
  });
});
