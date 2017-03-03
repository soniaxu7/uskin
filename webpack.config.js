var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var theme = process.env.npm_config_theme || 'default';

module.exports = {
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
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.js|jsx$/,
      exclude: /node_modules|__tests__/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: process.env.NODE_ENV !== 'production'
        }
      }

    }, {
      test: /\.less$/,
      use: ExtractTextPlugin.extract({
        use: [
          'css-loader?sourceMap&-minimize', {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [autoprefixer];
              }
            }
          },
          'less-loader?{sourceMap: true, modifyVars:{"theme": "\'' + theme + '\'"}}'
        ]
      })
    }, {
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
    }]
  },
  plugins: []
};
