---
template: post
title: CSS Sticky 속성을 사용해보자
slug: css-sticky
draft: true
date: 2019-03-21T01:47:57.740Z
description: |-
  header영역의 nav에 많이 쓰이는 어느정도 스크롤이 되면 상단에 고정이 되어서, fixed되는 속성이 있다. 
  scroll높이값을 계산해서 fixed된부분을 클래스를 toggle로 구현할필요없이 간단하게 css "Sticky" 속성에 대해서 알아보자.
category: Front-End
tags:
  - css
---
## CSS Sticky 속성에 대해서

먼저 결과부터 한번보자  
<https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_sticky_element>

```
div.sticky {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}
```
위와같이 사용하면 된다.

### 동영상강
<https://www.youtube.com/watch?v=X68ZDGzs-_E>
