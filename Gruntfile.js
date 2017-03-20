/*!
 * USkin's Gruntfile
 * Author: Lee Yao <yaoli111144@gmail.com>
 * Licensed under MIT
 */

var fs = require('fs');
var webpackConfig = require('./webpack.config.js');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
      ' * USkin v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
      ' * Inspired by bootstrap\n' +
      ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
      ' * Licensed under <%= pkg.license %> (https://github.com/icecreamliker/uskin/blob/master/LICENSE)\n' +
      ' */\n',

    // Task configuration.
    clean: {
      dist: ['dist'],
      legacy: ['dist/js/fonts', 'dist/js/css.js', 'dist/js/css.js.map', 'dist/js/*.css.min.js']
    },

    webpack: {
      options: webpackConfig,
      dev: {
        output: {
          filename: '[name].js'
        },
        plugins: [
          new ExtractTextPlugin({
            filename: '../css/uskin.css'
          })
        ],
        devtool: 'source-map'
      },
      build: {
        plugins: [
          new ExtractTextPlugin({
            filename: '../css/[hash:6].uskin.min.css'
          }),
          new webpack.optimize.UglifyJsPlugin(),
          new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: JSON.stringify('production')
            }
          })
        ]
      }
    },

    webfont: {
      icons: {
        src: 'fonts_svg/*.svg',
        dest: 'css/fonts',
        options: {
          types: 'eot,woff,ttf,svg',
          syntax: 'bem',
          stylesheet: 'less',
          relativeFontPath: 'fonts',
          destHtml: 'docs/raw_demos',
          templateOptions: {
            baseClass: 'glyphicon',
            classPrefix: 'icon-'
          },
          callback: function() {
            var src = 'css/fonts/icons.less',
              dest = 'css/icons.less';
            fs.renameSync(src, dest);
          }
        }
      }
    },

    copy: {
      fonts: {
        expand: true,
        cwd: './dist/js',
        src: 'fonts/*',
        dest: './dist/css'
      },
      img: {
        expand: true,
        cwd: './dist/js',
        src: 'img/*',
        dest: './dist/css'
      }
    },

    usebanner: {
      options: {
        position: 'top',
        banner: '<%= banner %>'
      },
      files: {
        src: ['dist/css/*.css', 'dist/js/*.js']
      }
    }
  });

  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, {
    scope: 'devDependencies'
  });
  require('time-grunt')(grunt);

  // Build JS
  grunt.registerTask('js', ['webpack:dev', 'webpack:build']);

  // Default task.
  grunt.registerTask('build', ['clean:dist', 'js', 'copy', 'clean:legacy', 'usebanner']);

  // Release with hash.
  grunt.registerTask('release', ['clean:dist', 'webpack:build', 'copy', 'clean:legacy', 'usebanner']);

  // Generate web font
  grunt.registerTask('font', ['webfont']);

};
