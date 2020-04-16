// const templeteCodeFilter =`const leonidas = {
//   name: 'Leondias',
//   skill: 'JavaScript',
// };
// const nicole = {
//   name: 'Nicole',
//   skill: 'Python',
// };
// const david = {
//   name: 'Nico',
//   skill: 'Python',
// };
// const employees = [];
// const sabePython = (employe) => {
// };
// console.log();`;

//const test = `assert.equal(callback(values),expected)`;


const test = 'assert.equal(result, "bar")';

const templeteCode = 'console.log()';

// const testFilter = `(result) => {
//   return result === [{
//     name: 'Nicole',
//     skill: 'Python',
//   },
//   {
//     name: 'Nico',
//     skill: 'Python',
//   }];
// }`;

document.getElementById('user_code').defaultValue = templeteCode;

// const testCode = () => {
//   const code = document.getElementById('user_code').value;
//   const worker = new Worker('./workers/worker.js');
//   const data = { code, test: testFilter };
//   worker.addEventListener('message', (e) => {
//     // console.log(e.data.result);
//     console.log(e.data.message);
// // import 'https://cdnjs.cloudflare.com/ajax/libs/chai/4.2.0/chai.min.js';

// // console.log('chai', chai);


const testCode = () => {
  const code = document.getElementById('user_code').value;
  const worker = new Worker('./workers/worker.bundle.js');
  //const data = { code };
  const data = { code, test: test };
  worker.addEventListener('message', (e) => {
    console.log('result', e.data.result);
    console.log('errors', e.data.errors);
    worker.terminate();
  }, false);

  worker.postMessage(data);
};
