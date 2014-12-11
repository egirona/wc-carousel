module.exports = function(grunt) {
	'use strict';
	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
		    dist: {
				files: {
					'src/css/main.css': 'src/scss/main.scss'
				},
				options: {
					style: 'expanded',
					debugInfo: false,
					lineNumbers: false,
					trace: false
				}
		    }
		},

		jshint: {
		  // define the files to lint
		  files: [ 'Gruntfile.js', 'src/js/*.js' ],
		  // configure JSHint (documented at http://www.jshint.com/docs/)
		  options: {
		      // more options here if you want to override JSHint defaults
		    globals: {
		      jQuery: true,
		      console: true,
		      module: true
		    }
		  }
		},

		watch: {
			js: {
				files: [ 'src/js/main.js' ],
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

	// Dependencies
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task
	grunt.registerTask( 'default', [ 'watch' ] );
};