const { merge } = require('webpack-merge');
const webpack = require('webpack');
const vendorModules = require('./vendorModules');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      './src/index.jsx',
    ],
    vendor: vendorModules,
  },
  optimization: {
    namedModules: true,
    splitChunks: {
      name: 'vendor',
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        production: false,
        debug: true,
      },
    }),
  ],
  output: {
    path: __dirname + '/dev',
    publicPath: '/dev',
  },
});
