const templeteCodeFilter =
  `const leonidas = {
  name: 'Leondias',
  skill: 'JavaScript',
};
const nicole = {
  name: 'Nicole',
  skill: 'Python',
};
const david = {
  name: 'Nico',
  skill: 'Python',
};

const employees = [];

const sabePython = (employe) => {
  
};

console.log();`;

const testFilter = `(result) => {
  return result === [{
    name: 'Nicole',
    skill: 'Python',
  },
  {
    name: 'Nico',
    skill: 'Python',
  }];
}`;

document.getElementById('user_code').defaultValue = templeteCodeFilter;

const testCode = () => {
  const code = document.getElementById('user_code').value;
  const worker = new Worker('./workers/worker.js');
  const data = { code, test: testFilter };
  worker.addEventListener('message', (e) => {
    // console.log(e.data.result);
    console.log(e.data.message);
    worker.terminate();
  }, false);

  worker.postMessage(data);
};
