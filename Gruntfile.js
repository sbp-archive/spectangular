module.exports = function(grunt) {
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

        shell: {
            doc: {
                command: 'npm run-script esdoc'
            }
        },

        watch: {
            transpile: {
                files: 'src/**/*.js',
                tasks: ['babel']
            },
            doc: {
                files: 'src/**/*.js',
                tasks: ['shell:doc']
            }
        },

        jshint: {
            options: {
                force: true,
                jshintrc: '.jshintrc'
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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-release');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', ['clean', 'jshint', 'babel', 'shell:doc']);
    grunt.registerTask('dev', ['clean', 'jshint', 'babel', 'watch']);
};
