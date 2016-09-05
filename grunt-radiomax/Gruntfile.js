// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({
        // configure jshint to validate js files -----------------------------------
    jshint: {
      options: {
        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
      },

      // when this task is run, lint the Gruntfile and all js files in src
      build: ['Grunfile.js', 'src/**/*.js']
    },
    pkg : grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files : {
          'dist/js/magic.min.js' : 'src/js/magic.js',
          'dist/js/script.min.js': 'src/js/script.js'
          // to minify multiple files into one --> ['src/js/magic.js', src/js/kotte.js]
        }
      }      
    },
    //end uglify
    less: {
        build:{
          files:{
            'dist/css/pretty.css' : 'src/css/pretty.less'
          }
        }
    },
    //end less
    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/css/pretty.min.css' : 'dist/css/pretty.css'
        }
      }
    }
    //end cssmin

    //create Task
    
  });

      grunt.registerTask('default', ['uglify','less','cssmin']);

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // my own last word thing....
};
