self.addEventListener("message", (e) => {
  const userCode = e.data.code;
  const testFunction = eval(e.data.test);
  let result;
  const liveCicle = {};

  const feedback = {};
  try {
    userCode.replace("console.log", 'return');
    result = (() => {
      // eslint-disable-next-line no-eval
      eval(userCode);
    })();
    liveCicle.useCode = true;
    liveCicle.testOutput = testFunction(result);
    liveCicle.test = false;
    feedback.message = liveCicle.testOutput ? 'All ok' : 'Test no pass';
  } catch (err) {
    feedback.message = liveCicle.useCode ? err : `Test no pass: ${err}`;
  }

  self.postMessage(feedback);
}, false);
