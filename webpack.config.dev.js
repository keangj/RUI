const base = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = Object.assign({}, base, {
  mode: "development",
  entry: {
    example: './example.tsx',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'example.html'
    })
  ]
});

module.exports = config;