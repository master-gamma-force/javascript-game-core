require('jest');

const test = describe('Test Triangle Area Function', (callback, values, expected) => {
  test('Calculate Area', () => {
    expect(callback(...values)).toEqual(expected);
  });
});

module.exports = test;
