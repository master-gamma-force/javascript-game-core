/* eslint-disable no-eval */
/* eslint-disable no-restricted-globals */
// self.importScripts('https://cdnjs.cloudflare.com/ajax/libs/chai/4.2.0/chai.min.js');
import { assert } from 'chai';


self.addEventListener('message', (e) => {
  const userCode = e.data.code;
  const testFunction = () => {
    eval(e.data.test);
  };
  let result;

  let errors = {
    type: 'no_errors',
    errors: {},
  };

  try {
    userCode.replace("console.log", 'return');
    result = (() => {
      // eslint-disable-next-line no-eval
      eval(userCode);
    })();
    testFunction();
  } catch (err) {
    errors = {
      type: 'error',
      errors: err,
    };
  }

  // self.postMessage(feedback);
  // let result;

  // let errors = {
  //   type: 'no_errors',
  //   errors: {},
  // };

  // try {
  //   assert.equal('bar', 'bar');
  //   result = eval(userCode);
  //   // assert.deepEqual('bar', 'var');
  // } catch (error) {
  //   errors = {
  //     type: 'error',
  //     error,
  //   };
  // }


  self.postMessage({
    result,
    errors,
  });
}, false);
