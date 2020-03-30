const runTest = require('./utils/runTests');

runTest('/mocks/test.js').then((errors) => {
  if (errors === 0) {
    console.log('Congratulation you did It');
  } else {
    console.log(`You got ${errors} errors`);
  }
});
