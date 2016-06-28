var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    uskin_api: './src/js/uskin_api.js',
    css: './src/css/style.less'
  },
  output: {
    path: './dist/js',
    filename: '[name].min.js',
    publicPath: '/dist',
    chunkFilename: '[id].bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js|jsx$/,
      exclude: /node_modules|__tests__/,
      loader: 'babel-loader',
      query: {
        cacheDirectory: true,
        presets: ['es2015', 'react']
      }
    },{
      test: /\.json$/,
      loader: 'json-loader'
    },{
      test: /\.less$/,
      loader: ExtractTextPlugin.extract(
        'css?sourceMap&-minimize!' + 'autoprefixer-loader!' + 'less?sourceMap'
      )
    },{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(
        'css?sourceMap&-minimize!' + 'autoprefixer-loader'
      )
    }]
  },
  resolve: {
    extensions: ['', '.jsx', '.js'],
    root: path.resolve('./'),
    alias: {
      'uskin': 'uskin/js/uskin',
      'react': 'node_modules/react',
      'react-dom': 'node_modules/react-dom'
    }
  }
};
