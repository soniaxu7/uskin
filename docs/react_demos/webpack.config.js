var fs = require('fs');
var path = require('path');

var entry = {};

var dirs = fs.readdirSync(path.resolve('./'));
dirs.forEach(function(dir) {
  if (!dir.split('.')[1] && dir.localeCompare('dist')) {
    var enterDir = fs.readdirSync(path.resolve('./' + dir));
    var jsFile = /.jsx$/;
    enterDir.forEach(function(file) {
      if (jsFile.exec(file)) {
        entry[file.replace('.jsx', '')] = './' + dir + '/' + file;
      }
    });
  }
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
