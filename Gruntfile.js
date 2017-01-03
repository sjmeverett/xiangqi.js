module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    ts: {
      options: {
        target: 'es2015',
        module: 'commonjs',
        sourceMap: true,
        jsx: 'react'
      },
      default: {
        src: ['src/**/*.ts', '!node_modules/**'],
        outDir: 'dist/es2015',
      }
    },

    babel: {
      options: {
        presets: ['es2015', 'es2016', 'es2017'],
        plugins: ['transform-runtime'],
        sourceMap: true
      },
      default: {
        files: [
          {
            expand: true,
            cwd: 'dist/es2015',
            src: ['**/*.js'],
            dest: 'dist'
          }
        ]
      }
    },

    watch: {
      'ts': {
        files: ['src/**/*.ts'],
        tasks: ['ts']
      },
      babel: {
        files: ['dist/es2015/**/*.js'],
        tasks: ['babel']
      }
    },

    clean: ['dist']
  });

  grunt.registerTask('default', ['ts', 'babel']);
};