var exportPath = require('path').resolve('./dist/js');
//var pkg = require('./package');

module.exports = {
  progress: true,
  entry: {
    uskin: './js/uskin.js'
  },
  output: {
    path: exportPath,
    filename: '[name].js',
    library: 'uskin22',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
    //   test: /\.js|jsx$/,
    //   loaders: ['babel']
    // }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  },
  plugins: [],
  devtool: 'source-map'
};