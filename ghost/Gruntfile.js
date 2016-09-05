module.exports = function(grunt){
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		jshint : {
			options :{
				reporter : require('jshint-stylish')
			},
			build: ['Gruntfile.js', 'src/**/*.js']
		},
		less : {
			build : {
				files : {
					'dist/css/style.css' : 'src/css/style.less'
				}
			}
		}
	});

	grunt.registerTask('default', ['less']); 

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
};