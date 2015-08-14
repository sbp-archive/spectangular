module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    clean: {
      build: './dist/*'
    },

    babel: {
      options: {
        sourceMap: false,
        optional: ['spec.protoToAssign']
      },
      common: {
        options: {
          modules: 'common'
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.js'],
          dest: 'dist/'
        }]
      },
    },

    watch: {
      transpile: {
        files: 'src/**/*.js',
        tasks: ['babel']
      }
    },

    jshint: {
      options: {
        force: true,
        jshintrc: '../../.jshintrc'
      },
      lib: {
        src: 'src/**/*.js'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      }
    },

    release: {
      options: {
        file: 'package.json',
        npm: true
      }
    },

    protractor: {
      options: {
        configFile: 'conf.js',
        keepAlive: true,
        noColor: true
      },
      test: {
        button: {
          options: {
            configFile: 'conf.js'
          }
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-release');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-protractor-runner');

  grunt.registerTask('default', ['clean', 'jshint', 'babel']);
  grunt.registerTask('dev', ['clean', 'jshint', 'babel', 'watch']);
  grunt.registerTask('test', ['protractor:test']);
};
