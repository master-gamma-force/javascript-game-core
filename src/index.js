
const coreTest = (testFunction, templateFunction, userSolution) => {
  // Security validation 
  const noVar = /var/g;
  if (noVar.test(userSolution)) throw new Error('The solution contain var');

  return testFunction(templateFunction, userSolution);
};

module.exports = coreTest;
