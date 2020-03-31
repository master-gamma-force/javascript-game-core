
const triangleAreaTest = (templateFunction, userSolution) => {
  const test1 = templateFunction(4, 7, userSolution) === 14;
  const test2 = templateFunction(7, 4, userSolution) === 14;
  return test1 && test2;
};

module.exports = triangleAreaTest;
