const jest = require('jest');

const runTest = (path) => new Promise((res, rej) => {
  const options = {
    projects: [__dirname],
    silent: true,
    outputFile: 'testOutput',
    testRegex: path,
  };
  jest
    .runCLI(options, options.projects)
    .then((success) => {
      res(success.results.numFailedTests);
    })
    .catch((failure) => {
      rej(failure);
    });
});


module.exports = runTest;
