const testCode = () => {
  const code = document.getElementById('user_code').value;
  const worker = new Worker('./workers/worker.js');
  const data = { code };
  worker.addEventListener('message', (e) => {
    alert(e.data.result);
    worker.terminate();
  }, false);

  worker.postMessage(data);
};
