const Bundler = require('parcel-bundler');
const Path = require('path');

// Single entrypoint file location:
const entryFiles = Path.join(__dirname, '/public/index.html');
// OR: Multiple files with globbing (can also be .js)
// const entryFiles = './src/*.js';
// OR: Multiple files in an array
// const entryFiles = ['./src/index.html', './some/other/directory/scripts.js'];


(async function() {
  // Initializes a bundler using the entrypoint location and options provided
  const bundler = new Bundler(entryFiles, {hmr: true});

  // Run the bundler, this returns the main bundle
  // Use the events if you're using watch mode as this promise will only trigger once and not for every rebuild
  let nPort = process.env.PORT || parseInt(process.argv.pop()) || 3000;
  await bundler.serve(nPort, false, false, "0.0.0.0");
})();