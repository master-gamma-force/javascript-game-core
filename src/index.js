// import 'https://cdnjs.cloudflare.com/ajax/libs/chai/4.2.0/chai.min.js';

// console.log('chai', chai);


const testCode = () => {
  const code = document.getElementById('user_code').value;
  const worker = new Worker('./workers/worker.bundle.js');
  const data = { code };
  worker.addEventListener('message', (e) => {
    console.log('result', e.data.result);
    console.log('errors', e.data.errors);
    worker.terminate();
  }, false);

  worker.postMessage(data);
};
