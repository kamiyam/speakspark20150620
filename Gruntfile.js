module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'scss',
          cssDir: 'css',
          imagesPath: 'img',
          environment: 'production',
          outputStyle: 'expanded',
          noLineComments: true
        }
      }
    },
    jshint: {
      all: {
        src: ['js/**/*.js'],
      },
    },
    watch: {
      html: {
        files: ['**/*.html'],
        options: {
          livereload: true,
        },
      },

      scripts: {
        files: ['js/**/*.js'],
        tasks: ['jshint'],
        options: {
          spawn: false,
          livereload: true,
        },
      },
      //scss: {
      //  files: ['scss/**/*.scss'],
      //  tasks: ['compass'],
      //  options: {
      //    livereload: true,
      //  },
      //},
      init: {
        files: ['Gruntfile.js'],
        tasks: ['watch']
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['compass']);
  grunt.registerTask('w', ['watch']);

};
