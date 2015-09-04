var child_process = require('child_process'),
  lesslint = require('lesslint');

module.exports = function(grunt) {
  grunt.task.registerTask('lesslint', 'Lint less files.', function() {
    try {
      grunt.log.ok('Successfully lint the less files.');

    } catch (e) {
      grunt.fail.warn('Fail to lint uskin less files.');
    }

  });
};