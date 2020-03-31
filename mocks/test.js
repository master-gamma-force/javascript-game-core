const triangleArea = (a, b) => a*b/2;

describe('Test Triangle Area Function', () => {
  test('Calculate Area', () => {
    expect(triangleArea(7, 4)).toEqual(14);
  });
});
