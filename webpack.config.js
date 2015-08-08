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
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 versions'
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,

      loader: 'url-loader'
    }]
  },

  devServer: {
    port: __PORT__,
    contentBase: './build',
    filename: 'application.js',
    hot: true
  },
}
