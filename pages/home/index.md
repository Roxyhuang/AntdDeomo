---
title: 基于antd响应式布局
---

# 一、主流移动端布局方案


之前做过PC页面的人聊的最多的就是『兼容』，这是因为浏览器之间的差异引起的，不再多说。而移动端是基本没有『兼容』的问题的，全是CSS3，简直不要太开心。可是『适配』问题随之而来。，我们怎么开始呢？目前有三种方法：  

1. **(1).固定高度，宽度自适应(我们采用)**
2. (2).固定宽度，viewport 缩放
3. (3).rem做宽度，viewport缩放

----------------------  
  
## 1 固定高度，宽度自适应 viewport缩放

这是目前最通用的一种做法，属于自适应布局，viewport width 设置为 device-width，垂直方向的高度和间距使用定值，水平方向混合使用定值和百分比或者利用弹性布局，最终达到“当手机屏幕变化时，横向拉伸或者填充空白的效果”。图像元素根据容器情况，使用定值或者 background-size 缩放。

**（1）例子：**[固定高度Demo1](http://www.meow.re/demo/screen-adaptation-in-mobileweb/app-fixed-height.html) [固定高度Demo2](./demo1.html)

**（2）特点：**

a. 布局灵活，简单易用 
  
b. 字体与字体不会间距不会根据设备进行改变 
 
c. 不利于页面的设计；只能设计横向拉伸的元素布局，存在很多局限性。兼容性较好。  


**（3）原理：**

```html
<meta name="viewport" content="width=device-width,initial-scale=1">
```
**采用网站：**  
[百度](https://m.baidu.com/)、[腾讯](http://info.3g.qq.com/)都是采用的这种方案。


----------



## 2 固定宽度，以固宽为比例缩放

视觉稿、页面宽度、viewport width 使用统一宽度，利用浏览器自身缩放完成适配。页面样式（包括图像元素）完全按照视觉稿的尺寸，使用定值单位 （px、em）即可完成。

**（1）例子：**[固定宽度Demo](http://www.meow.re/demo/screen-adaptation-in-mobileweb/app-fixed-width.html) [固定宽度Demo2](./demo2.html)

**（2）特点：**

a. 开发简单    缩放交给浏览器，完全按视觉稿切图。  
  
b. 还原精准    绝对等比例缩放，可以精准还原视觉稿（不考虑清晰度的情况下）。  

c.pc端两端，会留白体验差

d.	对于一些分辨率较低的手机，可能设备像素还未达到指定的 viewport 宽度，此时屏幕的渲染可能就不准确了。比较常见的是边框“消失”了，不过随着手机硬件的更新，这个问题会越来越少的。


**（3）原理：**

```html
<meta name="viewport" content="width=640,initial-scale=0.5,maximum-scale=0.5,minimum-scale=0.5,user-scalable=no">
```
**采用网站：**  
[荔枝](http://m.lizhi.fm/)、[网易新闻](http://c.3g.163.com/CreditMarket/default.html)都是采用的这种方案。

---------------------------


## 3 利用 rem 布局
px:像素（Pixel）。相对长度单位。像素px是相对于显示器屏幕分辨率而言的。

rem ：是CSS3新增的一个相对单位（root em，根em），这个单位引起了广泛关注。





```
//em指的是一个字体的大小，它会继承父级元素的字体大小，因此并不是一个固定的值。任何浏览器的默认字体大小都是16px。因此，12px = 0.75em。实际应用中为了方便换算，通常会如下设置样式：

html { font-size: 62.5%; }

//这。。我认为没什么用处。。不知道为什么网上喜欢这样用。。。
```



依照某特定宽度设定 rem 值（即 html 的 font-size），页面任何需要弹性适配的元素，尺寸均换算为 rem 进行布局；当页面渲染时，根据页面有效宽度进行计算，调整 rem 的大小，动态缩放以达到适配的效果。利用该方案，还可以根据 devicePixelRatio 设定 initial-scale 来放大 viewport，使页面按照物理像素渲染，提升清晰度。

**（1）例子：**[remDemo1](http://www.meow.re/demo/screen-adaptation-in-mobileweb/app-rem.html) [remDemo2](./demo3.html)

**（2）特点：**

a. 字体图片可以根据尺寸，缩放  
  
b. 可以实现高清方案  

c. 需要预编译库进行单位转换

d.	适配 js 需尽可能早进入，减少（避免）viewport 变化引起的重绘。


**（3）原理：**

```javascript

//js
(function (doc, win) {
  var docEl = doc.documentElement,
  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
  recalc = function () {
  	var clientWidth = docEl.clientWidth;
   if (!clientWidth) return;
    docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
    };

   if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

```

```scss
//scss
@function torem($px){//$px为需要转换的字号
    @return $px / 40px * 1rem; //40px为根字体大小
}


```  

```less
//less
.px2rem(@name, @px){
    @{name}: @px / 75 * 1rem;
}

```


**采用网站：**  
[荔枝](http://m.lizhi.fm/)、[网易新闻](http://c.3g.163.com/CreditMarket/default.html)都是采用的这种方案。


---------------------

## 4 媒介查询

使用 @media 查询，你可以针对不同的媒体类型定义不同的样式。
@media 可以针对不同的屏幕尺寸设置不同的样式，特别是如果你需要设置设计响应式的页面，@media 是非常有用的。
当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面。

[@mediaDemo1](./media.html) 




## 5 antd col and row

**概述**

布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：
通过row在水平方向建立一组column（简写col）
你的内容应当放置于col内，并且，只有col可以作为row的直接元素
栅格系统中的列是指1到24的值来表示其跨越的范围。例如，三个等宽的列可以使用.col-8来创建
如果一个row中的col总和超过 24，那么多余的col会作为一个整体另起一行排列

**Flex 布局#**

我们的栅格化系统支持 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。
Flex 布局是基于 24 栅格来定义每一个『盒子』的宽度，但排版则不拘泥于栅格。

[antdDemo1简单实现响应式](/about)


[antdDemo2antd grid官网入口](https://ant.design/components/grid/)



[antdDemo3](/about)

------------------



## 6 style in css and single css (关于样式的一些写法)

webpack中我们会用到 css-loader less-loader等加载起来处理css，样式上我们非常有可能会遇到几个问题


##1.  某特定组件书写样式

##2.	 行内样式（不推荐）

##2.  全局样式

##3.  覆盖antd样式



## 7 flexbox 


