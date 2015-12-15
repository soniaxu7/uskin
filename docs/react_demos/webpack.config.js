module.exports = {
  progress: true,
  entry: {
    'switch': './js/switch.js'
  },
  output: {
    path: './dist',
    filename: '[name].js'
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
    }]
  },
  plugins: []
};
