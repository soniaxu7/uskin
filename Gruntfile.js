/*!
 * USkin's Gruntfile
 * Author: Lee Yao <yaoli111144@gmail.com>
 * Licensed under MIT
 */

var fs = require('fs');
var webpackConfig = require('./webpack.config.js');
var webpack = require('webpack');

module.exports = function(grunt) {
  'use strict';

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
      dist: ['dist']
    },

    less: {
      compile: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: '<%= pkg.name %>.css.map',
          sourceMapFilename: 'dist/css/<%= pkg.name %>.css.map'
        },
        files: {
          'dist/css/<%= pkg.name %>.css': 'less/<%= pkg.name %>.less'
        }
      }
    },

    postcss: {
      options: {
        map: {
          prev: 'dist/css',
          inline: false
        },
        processors: [
          require('autoprefixer')({
            browsers: ['> 1%', 'last 2 versions']
          }),
          require('postcss-class-prefix')(''),
          require("stylelint")()
        ]
      },
      dist: {
        src: 'dist/css/*.css'
      }
    },

    csscomb: {
      options: {
        config: './.csscomb.json'
      },
      dist: {
        expand: true,
        cwd: 'dist/css/',
        src: ['*.css'],
        dest: 'dist/css/'
      }
    },

    cssmin: {
      minify: {
        options: {
          keepSpecialComments: 0,
          sourceMap: true,
          report: 'gzip'
        },
        files: {
          'dist/css/<%= pkg.name %>.min.css': ['dist/css/<%= pkg.name %>.css']
        }
      }
    },
    webpack: {
      options: webpackConfig,
      build: {
        output: {
          filename: '[name].min.js',
        },
        plugins: [new webpack.optimize.UglifyJsPlugin({
          sourceMap: false
        })]
      }
    },
    webfont: {
      icons: {
        src: 'fonts_svg/*.svg',
        dest: 'less/fonts',
        options: {
          types: 'eot,woff,ttf,svg',
          syntax: 'bem',
          stylesheet: 'less',
          relativeFontPath: 'fonts',
          destHtml: 'docs/examples',
          templateOptions: {
            baseClass: 'glyphicon',
            classPrefix: 'icon-'
          },
          callback: function() {
            var src = 'less/fonts/icons.less',
              dest = 'less/icons.less';
            fs.renameSync(src, dest);
          }
        }
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
    },

    copy: {
      fonts: {
        expand: true,
        cwd: './less',
        src: 'fonts/*',
        dest: 'dist/css'
      }
    },

    watch: {
      less: {
        files: 'less/**/*.less',
        tasks: ['clean', 'lesslint', 'less', 'postcss', 'csscomb', 'cssmin', 'copy']
      }
    }
  });


  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, {
    scope: 'devDependencies'
  });
  require('time-grunt')(grunt);

  // Load task-related files from the specified directory
  grunt.task.loadTasks('./grunt');

  // Default task.
  grunt.registerTask('release', ['clean', 'lesslint', 'less', 'postcss', 'csscomb', 'cssmin', 'webpack:build', 'usebanner', 'copy']);

  // Test
  grunt.registerTask('test', ['lesslint']);

  // Generate web font
  grunt.registerTask('font', ['webfont']);

};