## 会动的圣诞卡
### 初衷

临近圣诞节，想给朋友送些东西，但是嘛送礼物就要费时间精力，送贺卡就好像略显普通，思来想去，便想到了一个两年前看到的项目：「会动的简历」，突发奇想，我是不是也能自己做一个线上会动的贺卡，然后通过url上带上不同人名，然后显示成不同的贺卡内容，这样写一个模板，就可以给他们每个人都发一份独一无二的礼物（肯定是最近代码生成器写多了，所以才变得这么不走心）

### 原理理解与选型
说做就做，先把之前看到的项目拉下来并看看实现原理，emm，感觉原理就是使用interval实现了打字效果，同时也是用interval加上动画效果，不过有些动画细节不是很清楚，做到的时候可以再看源码

技术选型方面，由于开发时间有限，就先基于「主要框架选自己熟练的，次要框架选自己想去了解」的原则选型
技术选型初定为：
* 使用React+es6语法
* 使用create-react-app脚手架快速生成项目
* 使用webpack完成项目的构建
* 使用yarn来处理依赖包的管理

### 贺卡原型设计


### 功能实现