module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      dev: {
        options: {
          transform: [ reactify ],
          browserifyOptions: {
              extensions: ['.jsx'],
              debug: true
          },
          watch: true,
          keepAlive: true
        },
        files: {
          "build/application.js": "src/application.jsx"
        }
      },
      prod: {
        files: {
            "build/application.js": "src/application.jsx"
        },
        options: {
          transform: [reactify],
          browserifyOptions: {
            extensions: ['.jsx']
          }
        }
      }
    },
    less: {
      development: {
         options: {
             paths: ["build"]
         },
         files: {
          "build/application.css": "src/less/*.less"
        }
     },
    },
    uglify: {
      my_target: {
        files: {
          "build/application.min.js": "build/application.js"
        }
      }
    },
    watch: {
      files: ["./src/**/*"],
      tasks: ["browserify", "less"],
    },
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-react");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.event.on("watch", function(action, filepath, target) {
    grunt.log.writeln(target + ": " + filepath + " has " + action);
  });
};