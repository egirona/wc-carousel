module.exports = function(grunt) {
	'use strict';
	//Load all grunt tasks
	require('load-grunt-tasks')(grunt);
	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
		    dist: {
				files: {
					'src/css/main.css': 'src/scss/main.scss',
					'component/carousel-component.css': 'src/scss/carousel-component.scss'
				},
				options: {
					style: 'compressed',
				}
		    }
		},

		jshint: {
		  // define the files to lint
		  files: [ 'Gruntfile.js', 'src/js/main.js' ],
		  // configure JSHint (documented at http://www.jshint.com/docs/)
		  options: {
		    globals: {
		      jQuery: true
		    }
		  }
		},

		watch: {
			js: {
				files: [ 'src/js/*.js' ],
	  			tasks: [ 'jshint' ]
	  		},
	  		css: {
				files: [ 'src/scss/*.scss' ],
	  			tasks: [ 'sass' ]
	  		},
		},

		uglify: {
		    my_target: {
		    	files: {
		        	'src/js/main.min.js': 'src/js/main.js'
		    	}
		    }
		}

	});

	// Defaults tasks
	grunt.registerTask( 'default', [ 'watch:css' ] );
	grunt.registerTask( 'compile', [ 'jshint', 'sass', 'uglify' ] );
};