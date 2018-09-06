# res-dev响应式的页面开发
## 了解响应式开发之前知道媒体查询
```javascript
  <meta name="viewport" content="width=dev-width, initial-scale=1.0, maxmum-scale=1.0, minmum-scale=1.0, user-scalable=no">
```
内容的宽度为开发设备的宽度，初始化的宽度为1.0，最大宽度为1.0，最小宽度为1.0，禁止用户触发缩放

## 媒体查询
```
  @media [not|only] type [and](expr){ rules }
```

## 清除浮动
在项目中使用的浮动为：
```
给要发生浮动的元素的父级元素添加clearfix类
  .clearfix::after{
    content: '',
    display: block;
    clear: both;
  }
```

## 安装构建包工具
```
  npm i gulp
  npm i gulp-less
```

## 布局方案 flexible
```javascript
  var width = document.documentElement.clinetWdith
  var radio = width / 7.5
  document.documentElement.style.fontSize = raido + 'px'
```
flexible原理：通过hack手段获取设备的dpr的值，相应改变meta标签中的viewport值，使用rem进行等比缩放，使用hack手段用rem模拟vw特性<br>
使用gulp+px2rem+gulp实现兼容性布局问题；

## 调试解决方案
* 云测试代表工具： baiduMTC , 优测 ， 阿里云移动测试平台
* 多真机同步测试：GhostLab, Remote Preview , Adobe Edge Inspect
* 真机调试： ios需要数据线链接手机， 安卓：weinre

## 方案设计
方案：单页面多适配，通过媒体查询进行pc和移动端断点适配，适合flexiable做尺寸精确还原<br>
组件： 页面布局划分，导航组件，下载组件，视频播放组件<br>

## 目录结构

```
 src
├── css
│   ├── main.css
│   └── reset.css
├── img
├── index.html
└── js
```

## 测试断点
```
  /*
  媒体查询断点 desktoppad规则
*/
.mobile {
  display: none;
}
/*
  媒体查询断点 mobile规则
*/
@media (max-width: 768px){
  .desktop{
    display: none;
  }
  .mobile {
    display: block;
  }
}
```

## 配置gulpfile.js
### 安装
```
  "gulp-postcss": "^8.0.0",
  "postcss-px2rem": "^0.3.0"
```
### 配置
```
  var gulp = require('gulp')
  var postcss = require('gulp-postcss')
  var px2rem = require('postcss-px2rem')
  gulp.task('default', function(){
  var processors = [
    px2rem({remUnit: 75})
  ];
  return gulp.src('./src/css/mobile.css')    //输入路径
    .pipe( postcss(processors) )  //转换
    .pipe( gulp.dest('./dist/css') )   //输出路径
})
```
主要对移动端设备进行编译，将px自动编译为rem

## 解决兼容性问题 autoprefix
### 安装
```
 npm i autoprefixer --save-dev
```
### 插入
```
  在gulpfile.js环境状态下：
  var autoprefixer = require('autoprefixer')
  autoprefixer()
```
### package.json
```
  "browserslist": [
    ">1%",
    "IE 10"
  ]
```

## CSS压缩
使用css nano进行压缩
```
  npm i  cssnano --save-dev
```
### 引入
```
  var cssnano = require('cssnano')
  ...
  cssnano()
```
## 预览
### 移动端
![1536201487414.jpg](https://i.loli.net/2018/09/06/5b9093580ae1e.jpg)
### PC端
![1536201455884.jpg](https://i.loli.net/2018/09/06/5b9093580d5d4.jpg)

预览方式：
1. 本地：git clone 项目地址
2. 线上：  
