var path = require('path');

module.exports = {
  entry: './app',
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css', '.scss'],
    alias: {
      assets: path.join(__dirname, '../assets'),
      components: path.join(__dirname, './components'),
    },
    root: __dirname
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.(png|jpe?g)(\?.*)?$/, loader: 'url?limit=8192'},
      { test: /\.(svg|ttf|woff|eot)(\?.*)?$/, loader: 'file' }
    ]
  }
};
