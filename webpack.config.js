const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './src/manageOutput/index.js',
    print: './src/manageOutput/print.js'
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
    })
  ]
}
