const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  mode: "development",
  entry: './lib/index.tsx',  // 输入：项目主文件（入口文件）
  output: { // 输出
    path: path.resolve(__dirname, 'dist/lib'),  //想要生成到哪里
    // filename: 'my-first-webpack.bundle.js',  // webpack bundle 的名称
    library: 'RUI',
    libraryTarget: 'umd'  // 指定代码封装模块定义
  },
  // resolve: {
  //   extensions: ['.ts', '.tsx', '.js', '.jsx'] // 拓展名
  // },
  module: { // 配置加载资源
    rules: [  // 规则
      { 
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
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
};

module.exports = config;