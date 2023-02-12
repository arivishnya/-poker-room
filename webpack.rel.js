const { merge } = require('webpack-merge');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  entry: {
    add: ['./src/index.jsx'],
  },
  optimization: {
    splitChunks: false,
    // minimize: false,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
          compress: {
            pure_funcs: ['console.log'],
            // drop_console: true,
            ecma: 6,
            passes: 2,
            // unsafe_math: true,
          },
        },
        extractComments: {
          condition: true,
          banner: false,
        },
      }),
    ],
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./vendorManifest.json'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        production: true,
        debug: false,
      },
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
});
