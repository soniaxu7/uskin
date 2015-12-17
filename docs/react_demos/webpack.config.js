var fs = require('fs');
var path = require('path');
var entry = {};

var files = fs.readdirSync(path.resolve('./js'));
files.forEach(function(file) {
  entry[file.replace('.js','')] = './js/' + file;
});

module.exports = {
  progress: true,
  entry: entry,
  output: {
    path: './dist',
    filename: '[name].js'
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.js|jsx$/,
      exclude: /node_modules|__tests__/,
      loader: 'babel-loader',
      query: {
        cacheDirectory: true
      }
    }]
  },
  plugins: []
};
