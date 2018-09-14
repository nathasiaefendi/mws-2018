module.exports = function (grunt) {

  const sass = require('node-sass');

  // grunt.initConfig({
  //   pkg: grunt.file.readJSON('package.json'),
  //   sass: {
  //     options: {
  //       implementation: sass,
  //       sourceMap: true
  //     },
  //     dist: {
  //       files: [{
  //         expand: true,
  //         cwd: 'sass',
  //         src: ['**/*.scss'],
  //         dest: 'css',
  //         ext: '.css',
  //       }]
  //     },
  //   }
  // });
  // grunt.registerTask('default', ['sass']);
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),



sass: { // Begin Sass Plugin
    dist: {
      // options: {
      //   sourcemap: 'none'
      // },
      files: [{
        expand: true,
        cwd: 'sass',
        src: ['**/*.scss'],
        dest: 'css',
        ext: '.css'
    }]
    }
  },

watch: { // Compile everything into one task with Watch Plugin
    css: {
      files: '**/*.scss',
      tasks: ['sass'],
      options: {
        livereload: true, // needed to run LiveReload
      }
    }
  }
});

// Load Grunt plugins
grunt.loadNpmTasks('grunt-contrib-sass');
// grunt.loadNpmTasks('grunt-postcss');
// grunt.loadNpmTasks('grunt-contrib-cssmin');
// grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-serve');
grunt.event.on('watch', function(action, filepath, target) {
  grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
});

	// Register Grunt tasks
  grunt.registerTask('default', ['watch']);
};
