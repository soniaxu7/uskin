var config = require('./webpack.config.js');

config.watch = true;
config.keepAlive = true;
config.devtool = 'eval-source-map';
config.debug = true;

module.exports = config;
