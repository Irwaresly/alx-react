const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // Your entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'), // Output directory
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
        test: /\.js$/, // For JavaScript/JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel loader
        },
      },
      {
        test: /\.css$/, // For handling CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i, // For handling images
        type: 'asset/resource',
        loader: 'image-webpack-loader',
      },
    ],
  },
  devtool: 'inline-source-map', // For better debugging in development
};
