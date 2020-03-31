const coreTest = require('../index');
const triangleAreaTest = require('../templetes/test/triangleAreaTest');
const triangleArea = require('../templetes/fuctions/triangleArea');

describe('Test the core test', () => {
  test('Use template triangle Area', () => {
    expect(coreTest(triangleAreaTest, triangleArea, '(a * b) / 2')).toBe(true);
  });
});
