const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
    worker: './src/workers/worker.js',
  },
  output: {
    path: path.resolve(__dirname, './src/workers/'),
    filename: '[name].bundle.js',
  },
};
