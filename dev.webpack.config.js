var config = require('./webpack.config.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

config.watch = true;
config.keepAlive = true;
config.devtool = 'source-map';
config.debug = true;

config.output.filename = '[name].js';

config.module.loaders.splice(4, 1, {
  test: /\.(woff|svg|eot|ttf)\??.*$/,
  loader: 'url?limit=1000&name=../css/fonts/[hash:8].icon.[ext]'
});

config.plugins = [
  new ExtractTextPlugin('../css/uskin.css')
];

module.exports = config;
