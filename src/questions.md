## 导出问题
入口文件的什么内容才会导出到bundle呢？
目前的问题是普通函数似乎不会被导出，即使这个普通函数是被导入到入口文件的,或者是使用export语句导出，bundle似乎都没有这个函数

1. 似乎是在main里面使用了就会导出了，只是在模块里，无法直接在浏览器直接通过方法名访问这个方法。
2. 否定1，发现使用console.log函数会导出结果了，并且将函数用在dom里也会导出方法了。

## 加载css
1. 在webpack配置文件里添加module options
2. 安装style-loader, css-loader
3. 在入口文件导入写好的样式文件

```js
module : {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
```
style-loader将解析的css代码放到了style标签里
