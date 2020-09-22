// const webpack = require('webpack');
const path = require('path');
// const BUILD_DIR = path.resolve(__dirname, './public/build'); // where building is happening
// const APP_DIR = path.resolve(__dirname, './client'); // where the build is coming from

module.exports = {
  entry: {
    main: path.resolve(__dirname, './client/index.js'),
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/build')
  },
  watch: true,
  // resolve: {
  //   extensions: ['.js', '.jsx'],
  // },
  mode: 'development',
  module: {
    rules: [
      {
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
}