const settings = require('../src/loadSettings');
const {Map} = require('immutable');

test('It should not crash', () => {
  expect(() => settings).not.toThrowError();
});

test('It should have the default settings', () => {
  expect(settings).toMatchObject(
    Map({
      watchFolder: '/tests/data/watch',
      outputFolder: '/tests/data/output'
    })
  );
});
