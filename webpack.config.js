var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: {
    app: [
      APP_DIR + '/index.tsx',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server'
    ],
    vendor: ['react', 'react-dom']
  },
  output: {
    path: BUILD_DIR,
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ],
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.tsx', '.ts', '.json', ''],
  },
  module: {
    loaders: [
      {
        test: /\.(ts|tsx)$/,
        exclude: 'node_modules',
        loaders: ['react-hot-loader/webpack', 'babel?presets[]=es2015', 'ts-loader']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  devServer: {
    contentBase: "./",
    hot: true
  },
};

module.exports = config;