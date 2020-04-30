const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
    worker: './src/workers/worker.js',
  },
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: '[name].bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    port: 9000,
  },
};
