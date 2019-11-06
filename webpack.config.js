const path = require('path');

module.exports = {
  entry: './client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  mode: process.env.NODE_ENV || 'production',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/',
    // Required for Docker to work with dev server
    host: '0.0.0.0',
    // host: localhost,
    port: 8080,
    // proxy is required in order to make api calls to express server while using hot-reload webpack
    // server routes api fetch requests from localhost:8080/api/* (webpack dev server) to
    // localhost:3000/api/* (where our Express server is running)
    proxy: {
      '/api': 'http://localhost:3000',
    },
    // fallback to root for other urls
    historyApiFallback: true,
    // reload page when file changes
    liveReload: true,
    // enable HMR on the devServer
    hot: true,
  },
};
