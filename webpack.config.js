const path = require('path');

const config = {
  mode: "production",
  entry: './lib/index.tsx',  // 输入：项目主文件（入口文件）
  output: { // 输出
    path: path.resolve(__dirname, 'dist/lib'),  //想要生成到哪里
    filename: 'my-first-webpack.bundle.js',  // webpack bundle 的名称
    library: 'xxx',
    libraryTarget: 'umd'  // 指定代码封装模块定义
  },
  module: { // 配置加载资源
    rules: [  // 规则
      { 
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
};

module.exports = config;