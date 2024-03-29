const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  entry: {
    index: './src/manageOutput/index.js'
  },
  mode: 'development',
  //应该在配置的第一级就配置devtool以配置sourcemap的方式
  devtool: 'inline-source-map',
  devServer : {
    static: './dist',
    // 启动热模块替换，即只更新载入变动的模块
    hot: true
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].bundle.js',
    // 这个选项会帮助我们在每次构建前清理dist文件夹
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader','sass-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
