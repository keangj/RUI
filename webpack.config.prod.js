const base = require('./webpack.config')

const config = Object.assign({}, base, {
  mode: "production",
  externals: { // 外部库不打包
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDom'
    }
  }
})

module.exports = config;