var exportPath = require('path').resolve('./dist/js');

module.exports = {
  progress: true,
  entry: {
    uskin: './js/uskin.js'
  },
  output: {
    path: exportPath,
    filename: '[name].js',
    library: 'uskin',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.js|jsx$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        cacheDirectory: true,
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  },
  plugins: [],
  devtool: 'source-map'
};