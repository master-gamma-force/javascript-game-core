/* eslint-disable no-eval */
import TestManager from '../TestManager/TestManager';


self.addEventListener('message', (e) => {
  const tm = new TestManager(e.data.test);

  let step;

  try {
    step = 'load user code';
    const userCode = e.data.code.replace(/console.log/g, '');

    step = 'run user code';
    const userResult = (eval(`() => { ${userCode} }`))();

    step = 'load test';

    tm.tests.forEach((test) => {
      test.value = (eval(`() => {${userCode} return ${test.value};}`))();
    });

    step = 'run test';
    tm.run();
  } catch (err) {
    tm.log.newErr({
      step,
      pass: false,
      err,
    });
  }

  self.postMessage({
    logs: tm.log.logs,
    errors: tm.log.errors,
  });
}, false);
