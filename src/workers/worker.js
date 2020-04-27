/* eslint-disable no-eval */
/* eslint-disable no-restricted-globals */
// self.importScripts('https://cdnjs.cloudflare.com/ajax/libs/chai/4.2.0/chai.min.js');
import TestManager from '../TestManager/TestManager';


self.addEventListener('message', (e) => {
  const tm = new TestManager(e.data.test);

  let step;

  try {
    step = 'load user code';
    const userCode = e.data.code.replace(/console.log/g, 'return');

    step = 'run user code';
    const userResult = (eval(`() => { ${userCode} }`))();

    step = 'run test';
    tm.run(userResult);
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

/*
let leonidas = {
  name: "Leondias",
  skill:  "JavaScript"
}
let nicole = {
  name: "Nicole",
  skill: "Python"
}
let richard = {
  name: "Richard",
  skill: "Python"
}
let angela = {
  name: "Angela",
  skill: "JavaScript"
}

const employees = [leonidas, nicole, richard, angela];

const  knowPython = (dev) => dev.skill == 'Python';

const sabePython = employees.filter(knowPython);

console.log(sabePython);

*/