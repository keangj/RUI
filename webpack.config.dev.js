const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = Object.assign({}, base, {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
})

module.exports = config;