require('jest');

const triangleArea = () => {};

const test = describe('Test Triangle Area Function', () => {
  test('Calculate Area', () => {
    expect(triangleArea(7, 4)).toEqual(14);
  });
});

module.exports = test;
