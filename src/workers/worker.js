self.addEventListener("message", (e) => {
  const userCode = e.data.code;
  // eslint-disable-next-line no-eval
  const result = eval(userCode);

  self.postMessage({ result });
}, false);
