---
template: post
title: css gradient animation
slug: css gradient animation
draft: false
date: 2019-01-24T09:16:22.601Z
description: |+
  웹페이지에서 배너작업 같은것을 할때 배경을 transition을 사용해서 에니메이션 작업할때
  요즘은 그라디언트로 다시 표현을 많이한는 것같아서, 그라디언트 에니메이션으로 구현하다가. google에서 찾아봤다.
  담에는 언젠가 써보려고, 표시해둔다.

category: Front-End
tags:
  - gradient
  - css
---
![](/media/99539d475be1574a13.png)


#### 결과보기: [https://codepen.io/P1N2O/pen/pyBNzX](https://codepen.io/P1N2O/pen/pyBNzX)

```codepen
https://codepen.io/P1N2O/pen/pyBNzX
```
***

```css
body {
    width: 100wh;
    height: 90vh;
    color: #fff;
    background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
    background-size: 400% 400%;
    -webkit-animation: Gradient 15s ease infinite;
    -moz-animation: Gradient 15s ease infinite;
    animation: Gradient 15s ease infinite;
}

@-webkit-keyframes Gradient {
    0% {
        background-position: 0% 50%
    }
    50% {
        background-position: 100% 50%
    }
    100% {
        background-position: 0% 50%
    }
}

@-moz-keyframes Gradient {
    0% {
        background-position: 0% 50%
    }
    50% {
        background-position: 100% 50%
    }
    100% {
        background-position: 0% 50%
    }
}

@keyframes Gradient {
    0% {
        background-position: 0% 50%
    }
    50% {
        background-position: 100% 50%
    }
    100% {
        background-position: 0% 50%
    }
}

h1,
h6 {
    font-family: 'Open Sans';
    font-weight: 300;
    text-align: center;
    position: absolute;
    top: 45%;
    right: 0;
    left: 0;
}
```

위의 소스가 활용하면 좋을듯하
css로 그라디언트를 그리고, 크기를 4배정도 키운다. 그리고 keyframes의 에니메이션으로 왔다갔다. 무한반복한다.

응용하면 무지개도 될것이다.
