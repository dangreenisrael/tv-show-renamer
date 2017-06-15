const moveFiles = require('../src/moveFiles');
const mockFs = require('mock-fs');
const {List} = require('immutable');
afterAll(() => {
  mockFs.restore();
});

beforeAll(() => {
  mockFs({
    watchFolder: {
      'show1.txt': 'show 1 content',
      show1: {},
      show2folder: {
        'show2.txt': 'show 2 content'
      },
      'empty-dir': {
        /** empty directory */
      }
    }
  });
});

describe('Move files', () => {
  it('should move all the files', done => {
    const paths = List([
      {
        sourcePath: `watchFolder/show1.txt`,
        destinationPath: `destinationFolder/show1/show1.txt`
      },
      {
        sourcePath: `watchFolder/show2folder/show2.txt`,
        destinationPath: `destinationFolder/show2/show2.txt`
      }
    ]);

    moveFiles(paths).then(results => {
      expect(results).toMatchObject({
        errors: List()
      });
      done();
    });
  });

  it("should catch a file that doesn't exist", done => {
    const paths = List([
      {
        sourcePath: `foo/show1.txt`,
        destinationPath: `destinationFolder/show1/show1.txt`
      }
    ]);

    moveFiles(paths).then(results => {
      expect(results.errors.size).toBe(1);
      done();
    });
  });
});
