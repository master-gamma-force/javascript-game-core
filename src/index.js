// const test = 'assert.equal(result, "bar")';

const test = {
  type: 'equal',
  expected: 'bar',
};

const templeteCode = 'console.log()';


document.getElementById('user_code').defaultValue = templeteCode;

const testCode = () => {
  const code = document.getElementById('user_code').value;
  const worker = new Worker('./workers/worker.bundle.js');

  const data = { code, test };

  worker.addEventListener('message', (e) => {
    console.log('result', e.data.result);
    console.log('errors', e.data.error);
    worker.terminate();
  }, false);

  worker.postMessage(data);
};
