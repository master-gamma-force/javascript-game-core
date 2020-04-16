/* eslint-disable no-eval */
/* eslint-disable no-restricted-globals */
// self.importScripts('https://cdnjs.cloudflare.com/ajax/libs/chai/4.2.0/chai.min.js');
import { assert } from 'chai';


self.addEventListener('message', (e) => {
  let result;

  let error = {};
  let step;

  const testFunction = new TestManager(e.data.test.type, e.data.test.expected);

  try {
    step = 'load user code';
    const userCode = e.data.code.replace('console.log', 'return');
    step = 'eval user code';
    result = (eval(`() => { ${userCode} }`))();
    step = 'Test';
    testFunction.test(result);
  } catch (err) {
    error = {
      step,
      err,
    };
  }

  self.postMessage({
    error,
    result,
  });
}, false);

class TestManager {
  constructor(type, expected) {
    this.test = (result) => {
      assert[type](result, expected);
    };
  }
}
