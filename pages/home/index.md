---
title: 基于antd响应式布局
---

# 一、主流移动端布局方案


之前做过PC页面的人聊的最多的就是『兼容』，这是因为浏览器之间的差异引起的，不再多说。而移动端是基本没有『兼容』的问题的，全是CSS3，简直不要太开心。可是『适配』问题随之而来。，我们怎么开始呢？目前有三种方法：  

1. (1).固定高度，宽度自适应
2. (2).固定宽度，viewport 缩放
3. (3).rem做宽度，viewport缩放

----------------------  
  
## 1 固定高度，宽度自适应

这是目前最通用的一种做法，属于自适应布局，viewport width 设置为 device-width，以较小宽度（如 320px）的视觉稿作为参照进行布局。垂直方向的高度和间距使用定值，水平方向混合使用定值和百分比或者利用弹性布局，最终达到“当手机屏幕变化时，横向拉伸或者填充空白的效果”。图像元素根据容器情况，使用定值或者 background-size 缩放。

**（1）例子：**[固定高度Demo](http://www.meow.re/demo/screen-adaptation-in-mobileweb/app-fixed-height.html)

**（2）特点：**

a. 以小宽度作为参照是因为如果布局满足了小宽度的摆放，当屏幕变宽时，简单的填充空白就可以了；而如果反过来就可能造成“挤坏了”，考虑 header 区域，左测 logo 右测横向 nav 的情况。  
  
b. 需要小宽度的布局，又需要大宽度的图像，这是一个矛盾点。  
 
c. 320px 过于窄小，不利于页面的设计；只能设计横向拉伸的元素布局，存在很多局限性。兼容性较好。  


**（3）原理：**

```html
<meta name="viewport" content="width=device-width,initial-scale=1">
```
**采用网站：**  
[百度](https://m.baidu.com/)、[腾讯](http://info.3g.qq.com/)都是采用的这种方案。


----------



## 2 固定宽度，viewport 缩放

[固定宽度Demo](http://www.meow.re/demo/screen-adaptation-in-mobileweb/app-fixed-width.html)

## 3 利用 rem 布局

[remDemo](/demo3)

