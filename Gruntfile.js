module.exports = function(grunt) {

  grunt.initConfig({
    browserify: {
      dist: {
        options: {
          browserifyOptions: {
            debug: true
          },
          transform: [["babelify", { "stage": 0 }]]
        },
        files: {
          "build/bundle.js": ["src/rf.js", "src/main.js"]
        }
      }
    },
    watch: {
      scripts: {
        files: "src/*.js",
        tasks: ["browserify"]
      },
    }
  });

  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["browserify"]);
};
