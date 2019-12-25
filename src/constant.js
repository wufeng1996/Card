const defaultText1 = `
/* 首先给所有元素加上过渡效果 */
* {
  transition: all .3s;
}
/* 白色背景太单调了，来点背景 */
html {
  background: rgb(0,43,54);
  color: rgb(222,222,222); 
}
/* 文字离边框太近了 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
}
/* 给代码上个色 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }
/* 加点 3D 效果 */
html{
  perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}
/* 接下来准备一个贺卡编辑器 */
.resumeEditor{
  position: fixed; right: 0; top: 0;
  padding: .5em;  margin: .5em;
  width: 48vw; height: 90vh;
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}
/* 好了，我要开始为小仙女写贺卡了 */

`;

const defaultText2 = `/* emmm啊啊，贺卡有点丑啊, 橙子妈要吐槽了
`;

const defaultText3 = `/* 那就加点样式吧 */
.resumeEditor {
  padding: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
}
.resumeEditor h3{
  font-family: exmouth;
  font-size: 5em;
  font-weight: 500;
}
.resumeEditor h4{
  font-family: liukai;
  font-size: 2em;
  text-align: center;
}
.resumeEditor hr{
  margin: 0 4vw;
  border: 1px solid #fff;
}

.resumeEditor {
  border: 1px solid #000;
  background-color: #943038;
  background-image: radial-gradient(#c75f4e, #943038);
  box-shadow: 0 0 30px #000;
  color: #fff;
}



/*
 * 大功告成了,不知道你会不会喜欢呢. “礼物呢, 礼物呢, 礼物在哪里嘛”
 * 礼物就是贺卡呀
 * --------- 
 * 好了, 现在开始找出贺卡的秘密吧~.~
 * 我们的口号“独立自主, 拒绝外援”
 */
`


export default [
  {
    id: "5d289e6d-5a68-135f-ae69-888fbda06316",
    nickName: "橙子",
    message: [
      `/*
  * hi，橙子
  * 圣诞节到了, 有没有收到礼物呀. 
  * 这个圣诞是不是过得特委屈啊, 没气氛还要赶作业. Take it easy, 用代码给你画个贺卡吧
  */
 ` + defaultText1,
      defaultText2,
      defaultText3
    ],
    card: `
### Merry  Christmas
------------------
#### 给橙子的圣诞专属祝福
------------------
------------------
#### 屋子并不大,却在每一家
#### 美味出自那,天天需要它
    `
  }
];
