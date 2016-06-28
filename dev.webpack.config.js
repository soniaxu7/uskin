var config = require('./webpack.config.js');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

config.watch = true;
config.keepAlive = true;
config.devtool = 'source-map';
config.debug = true;

config.output.path = 'dist/js';
config.output.filename = '[name].min.js';
config.output.chunkFilename = '[id].bundle.js';
config.plugins = [
  new ExtractTextPlugin('../css/style.min.css')
];

module.exports = config;