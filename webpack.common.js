const webpack = require('webpack');
const path = require('path');
const sourcePath = path.join(__dirname, './src');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css|sass|scss)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  optimization: {
    noEmitOnErrors: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'node_modules'), sourcePath],
    // alias: {
    //   '@': path.resolve(__dirname, 'src'),
    //   '@components': path.resolve(__dirname, 'src/components'),

    //   // "@packages": path.resolve(__dirname, "src/packages"),
    //   // "@widgets": path.resolve(__dirname, "src/components/widgets"),
    //   // "@api": path.resolve(__dirname, "src/API"),
    //   // "@constants": path.resolve(__dirname, "src/constants"),
    //   // "@utils": path.resolve(__dirname, "src/utils"),
    //   // "@errors": path.resolve(__dirname, "src/errors"),
    //   // "@pages": path.resolve(__dirname, "src/pages"),
    //   // "@layouts": path.resolve(__dirname, "src/layouts"),
    //   // "@providers": path.resolve(__dirname, "src/providers"),
    // },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        rootContainer: `document.getElementById("poker-room")`,
        npm_package_name: JSON.stringify(process.env.npm_package_name),
        npm_package_version: JSON.stringify(process.env.npm_package_version),
      },
    }),
  ],
  output: {
    filename: '[name].js',
  },
};
