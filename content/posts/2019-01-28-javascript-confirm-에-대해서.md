---
template: post
title: Javascript confirm 에 대해서
slug: Javascript-confirm
draft: false
date: 2019-01-28T08:47:58.578Z
description: |-
  Javascript confirm 팝업에 대해서,  취소/ 확인을 했을경우 특정 이벤트 혹은 액션을 하고싶을때,  명령어 해두었다. 
  복사해서 필요할때 사용했으면 한다. 
category: Front-End
tags:
  - javascript
---
버튼을 클릭했을경우 메시지와 함께 취소/확인 버튼을 나오게하고 클릭시 어떤 이벤트를 하고 싶다면?

### 결과화면
![result](/media/994ad93a5bf36bf728.png)

### 소스
```
/*-- Window confirm() Method --*/
var txt = 'Press a button!';
var _popup = confirm(txt);
if (_popup == true) {
    window.location.href = 'https://yeshtml5.com';
} else {
    alert('You click No');
}
```

 이곳에서 취소/확인 은 시스템의 OS언어 혹은 브라우져 기본 언어를 종속된.   
영문OS / 국문OS에 따라서 이름이 취소 대신 cancel로 보여질수있다. 
만약 텍스트를 변경하고싶을경우는 레이어팝업으로 만들어서 사용해야한다.

디자인으로 이쁘게 보이게 하고싶으면 레이어팝업을, 그러나 개발자는 System popup이라 불리는 그래도 사용하기를 원할것이다.  
__상황에 맞춰 설득하자__
