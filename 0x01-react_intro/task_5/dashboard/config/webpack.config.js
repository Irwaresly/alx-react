const path = require('path');

module.exports = {
  mode: 'development', // Can change to 'production' for production build
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    hot: true,
    open: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        loader: 'image-webpack-loader',
      },
    ],
  },
  devtool: 'inline-source-map',
};
