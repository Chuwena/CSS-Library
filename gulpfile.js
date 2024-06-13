// import the needed functions from gulp
const { src, dest, watch, series } = require("gulp");

// import the sass plugin, returns a function
// invoke the sass plugin function using the set compiler (sass) also returns a function
// invoke the final function to compile the sass file to css
const sass = require("gulp-sass")(require("sass"));

// a plugin that will remove all unused css from the cs file
// first pip install it then add it here (npm install gulp-purgecss --save-dev)
const purgecss = require("gulp-purgecss");

// create the function respensible for compiling css sas to css
function createStyle() {
  // in any new project don't change cs-library files, create sass folder and change it here to that file
  return src("css-library/**/*.scss")
    .pipe(sass())
    .pipe(purgecss({ content: ["*.html"] }))
    .pipe(dest("css"));
  // if u want the function to watch all .scss file = ("*.scss") instead of ("indes.scss")
  // but this can cause creating many files so we rename the files that need to be ibnored to sart by _
}

// create a watcher function that will actively watch sas file
function watchSass() {
  watch(["css-library/**/*.scss", "*.html"], createStyle);
  // if u want the function to watch all .scss file = ("*.scss") instead of ("indes.scss")
  // but this can cause creating many files so we rename the files that need to be ibnored to sart by _
}

exports.default = series(createStyle, watchSass);

// use npx gulp in terminal to run this code
