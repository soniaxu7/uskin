var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        cacheDirectory: true
      }
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract(
        'css?sourceMap&-minimize!' + 'autoprefixer-loader!' + 'less?sourceMap'
      )
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(
        'css?sourceMap&-minimize!' + 'autoprefixer-loader'
      )
    }, {
      test: /\.(woff|svg|eot|ttf)\??.*$/,
      loader: 'url?limit=1000&name=./fonts/[hash:8].icon.[ext]'
    }]
  },
  plugins: []
};
