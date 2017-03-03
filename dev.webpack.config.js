var config = require('./webpack.config.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

config.watch = true;
// config.keepAlive = true;
config.devtool = 'source-map';

config.output.filename = '[name].js';

config.module.rules.splice(4, 2, {
  test: /\.(woff|svg|eot|ttf)\??.*$/,
  use: [{
    loader: 'url-loader',
    options: {
      limit: 1000,
      name: '../css/fonts/[hash:8].icon.[ext]'
    }
  }]
}, {
  test: /\.(jpe?g|png|gif|svg)$/i,
  use: [{
    loader: 'url-loader',
    options: {
      limit: 2000,
      name: '../css/img/[hash:8].[name].[ext]'
    }
  }]
});

config.plugins = [
  new ExtractTextPlugin({
    filename: '../css/uskin.css'
  }),
  new webpack.LoaderOptionsPlugin({
    debug: true
  })
];

module.exports = config;
