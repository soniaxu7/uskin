var config = require('./webpack.config.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

config.watch = true;
config.keepAlive = true;
config.devtool = 'source-map';
config.debug = true;

config.output.filename = '[name].js';
config.plugins = [
  new ExtractTextPlugin('../css/[name].min.css')
];

module.exports = config;
