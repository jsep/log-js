module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    simplemocha: {
      options: {
        globals: ['expect'],
        timeout: 3000,
        ignoreLeaks: false,
        ui: 'bdd'
      },
      all: { src: ['tests/*.js'] }
    },


    watch: {
      scripts: {
        files: ['Gruntfile.js', 'src/*.js', 'tests/**/*.js'],
        tasks: ['dev']
      }
    }

  });

  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('dev', ['simplemocha']);
  grunt.registerTask('default', ['simplemocha']);
};