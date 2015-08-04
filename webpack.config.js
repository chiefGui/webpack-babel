var WebpackDevServer  = require ('webpack-dev-server');
var path              = require ('path');

var __PORT__ = 9000;

module.exports = {
  context: __dirname,

  entry: './application/main.js',

  output: {
    path: './build',
    filename: 'application.js'
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,

      include: [
        path.resolve(__dirname, 'application')
      ],

      loader: 'babel-loader'
    }]
  },

  devServer: {
    port: __PORT__,
    contentBase: './build',
    filename: 'application.js',
    hot: true
  },
}
