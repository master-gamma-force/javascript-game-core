
const test = describe('Test Triangle Area Function', () => {
  const triangleArea = require('./triangleArea');
  it('Should Calculate Area', () => {
    expect(triangleArea(7, 4)).toEqual(14);
  });
});

module.exports = test;
