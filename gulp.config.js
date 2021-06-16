module.exports = {
  // Settings: Turn on/off build features
  clean: true,
  styles: true,
  images: true,
  scripts: false,
  copy: false,
  reload: true,

  // Global project folder destinations
  input: "src/",
  html: "src/",
  output: "dist/",

  // Styles
  stylesSrc: "src/scss/**/*.{scss,sass}",
  stylesDest: "dist/css",

  // Images
  imagesSrc: "src/images/*.*",
  imagesDest: "dist/images",

  // Scripts
  scriptsSrc: "src/js/*.js",
  scriptsDest: "dist/",

  // reload
  reload: "dist/",
};
