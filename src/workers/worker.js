/* eslint-disable no-eval */
/* eslint-disable no-restricted-globals */
// self.importScripts('https://cdnjs.cloudflare.com/ajax/libs/chai/4.2.0/chai.min.js');
import { assert } from 'chai';


self.addEventListener('message', (e) => {
  const userCode = e.data.code;
  let result;

  let errors = {
    type: 'no_errors',
    errors: {},
  };

  try {
    assert.equal('bar', 'bar');
    result = eval(userCode);
    // assert.deepEqual('bar', 'var');
  } catch (error) {
    errors = {
      type: 'error',
      error,
    };
  }


  self.postMessage({
    result,
    errors,
  });
}, false);
