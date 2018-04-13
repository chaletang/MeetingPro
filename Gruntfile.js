module.exports = function(grunt) {
	//require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
	require('load-grunt-tasks')(grunt, {
		scope : 'devDependencies'
	});
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		banner: '/*!\n' +
            ' * Bootstrap v<%= pkg.version %>\n' +
            ' * Pattern Library\n' +
            ' */\n',
		conf : {
			path : './app',
			sass: './sass/app.scss',
			css: '<%= conf.path %>/css/app.css',
			port : '9011'
			
		},
		
		htmllint : {
			html : {
				options : {},
				src : ['<%= conf.path %>/**/*.html']
			}
		},
		
		/*Compile scss files to css files*/
		sass: {
			compile: {		 
			        src: '<%= conf.sass %>',
			        dest: '<%= conf.css %>'		   
		   },
		},

		/*Jekyll*/
		jekyll : {
			build : {
				options : {
					config : '_config.yml',
					serve : false
				}
			},
			serve : {
				options : {
					config : '_config.yml',
					port : '<%= conf.port %>',
					serve : true
				}
			}
		},

		/*Watch event for files, including add, change, delete*/
		watch : {
			build : {
				files : ['<%= conf.path %>/**','sass/**'],
				tasks : ['htmllint:html','sass:compile','jekyll:build']
			}
		}
	});

	/*Register changePort tasks*/
	grunt.registerTask('changePort', function() {
		var port = grunt.option('port') || grunt.config.get('conf.port');
		grunt.config.set('conf.port', port);
	});

	/*Register jekyll serve tasks*/
	/** If you want to customize your server port when run jekyll.
	 * 	Run command: grunt jekyllP1 --port=[port], like: grunt jekyllP1 --port=6001;
	 * 	If you do not want to customize your server port
	 * 	Run command: grunt jekyllP1, it will use default port.
	 */
	grunt.registerTask('jekyllGit', ['changePort', 'jekyll:serve']);
	
};
