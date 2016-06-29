var fs = require('fs');
var webpackConfig = require('./webpack.config.js');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),

    //Task configuration.
    clean: {
      dist: ['dist'],
      legacy: ['dist/js/*.css.min.js']
    },

    webpack: {
      options: webpackConfig,
      build: {
        plugins: [
          new ExtractTextPlugin('../css/[hash:6].style.min.css'),
          new webpack.optimize.UglifyJsPlugin()
        ]
      }
    }
  });

  require('load-grunt-tasks')(grunt, { scope: 'devDependencies'});

  require('time-grunt')(grunt);

  grunt.registerTask('build', ['clean:dist', 'webpack', 'clean:legacy']);

  grunt.registerTask('release', ['clean:dist', 'webpack:build', 'clean:legacy']);

};
