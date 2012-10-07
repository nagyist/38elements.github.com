module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-mincss');
    grunt.initConfig({
      mincss: {
        dist: {
          src: ['css/normalize.css', 'css/pygments.css', 'css/blog.css'],
          dest: 'css/common.css'
        },
      }
    });
    grunt.registerTask('default', 'mincss');
};
