var webpackConfig = {
  entry : ["babel-polyfill","./src/app.js"],
  output : {
    path : __dirname + '/lib',
    filename : 'app.js'
  },
  module : {
    loaders : [
      {
        loader : "babel-loader",
        test: /\.js?$/,
        excludes: ['/node_modules/']
      }
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
  }
};

module.exports = webpackConfig;
