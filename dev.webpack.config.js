var config = require('./webpack.config.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var theme = process.env.npm_config_theme || 'default';

config.watch = true;
config.keepAlive = true;
config.devtool = 'source-map';
config.debug = true;

config.output.filename = '[name].js';

config.module.loaders.splice(4, 1, {
  test: /\.(woff|svg|eot|ttf)\??.*$/,
  loader: 'url?limit=1000&name=../css/fonts/[hash:8].icon.[ext]'
});
console.log(config.module.loaders)

config.plugins = [
  new ExtractTextPlugin('../css/uskin.css')
];

module.exports = config;
