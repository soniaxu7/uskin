/*!
 * Bootstrap's Gruntfile
 * http://getbootstrap.com
 * Copyright 2013-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

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
      ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
      ' */\n',

    // Task configuration.
    clean: {
      dist: ['dist', 'docs/dist']
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

    cssmin: {
      minify: {
        options: {
          keepSpecialComments: 0,
          report: 'gzip'
        },
        files: {
          'dist/css/<%= pkg.name %>.min.css': ['dist/css/<%= pkg.name %>.css']
        }
      }
    },

    usebanner: {
      options: {
        position: 'top',
        banner: '<%= banner %>'
      },
      files: {
        src: 'dist/css/*.css'
      }
    },

    copy: {
      fonts: {
        expand: true,
        src: 'fonts/*',
        dest: 'dist/'
      },
      docs: {
        expand: true,
        cwd: './dist',
        src: [
          'css/*.css',
          'css/*.map',
          'fonts/*'
        ],
        dest: 'docs/dist'
      }
    },

    watch: {
      less: {
        files: 'less/*.less',
        tasks: ['clean', 'less', 'cssmin', 'usebanner', 'copy']
      }
    }
  });


  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, {
    scope: 'devDependencies'
  });
  require('time-grunt')(grunt);

  // Default task.
  grunt.registerTask('default', ['clean', 'less', 'cssmin', 'usebanner', 'copy']);

  // TODO
  grunt.registerTask('test', ['clean', 'less', 'cssmin']);

};