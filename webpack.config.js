var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var theme = process.env.npm_config_theme || 'default';

module.exports = {
  progress: true,
  entry: {
    uskin: './js/uskin.js',
    css: './css/uskin.less'
  },
  output: {
    path: './dist/js',
    filename: '[hash:6].[name].min.js',
    library: 'uskin',
    libraryTarget: 'umd'
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
        cacheDirectory: process.env.NODE_ENV !== 'production'
      }
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract(
        'css?sourceMap&-minimize!' + 'postcss-loader!' + 'less?{sourceMap: true, modifyVars:{"theme": "\'' + theme + '\'"}}'
      )
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(
        'css?sourceMap&-minimize!' + 'postcss-loader'
      )
    }, {
      test: /\.(woff|svg|eot|ttf)\??.*$/,
      loader: 'url?limit=1000&name=./fonts/[hash:8].icon.[ext]'
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'url?limit=2000&name=./img/[hash:8].[name].[ext]'
    }]
  },
  postcss: function() {
    return [autoprefixer];
  },
  plugins: []
};
