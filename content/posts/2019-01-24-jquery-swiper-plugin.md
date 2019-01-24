---
template: post
title: jquery Swiper Plugin
slug: jquery Swiper Plugin
draft: false
date: 2019-01-24T08:57:57.984Z
description: |-
  웹페이지에서 특히나 반응형페이지에서는 Swiper기능이 필수이다. 
  쓰다가, 안쓰다가 가물가물해서, 괜찮은 플러그인 소스랑 주섬주섬 몇자 적어놓고자한다.
category: Front-end
tags:
  - Javascript
---
웹페이지에서 특히나 반응형페이지에서는 Swiper기능이 필수이다. 
쓰다가, 안쓰다가 가물가물해서, 괜찮은 플러그인 소스랑 주섬주섬 몇자 적어놓고자한다.

![](/media/99d1b0375bf7ba4605.png)

먼저 플러그인을 받을수있는 주소는 다음과 같다.

https://idangero.us/swiper/

사용법은 API을 읽어보면 가장좋겠지만, 직관적으로

https://idangero.us/swiper/demos/

이해가 될수있을것이다. 

```
        /*swiper*/
        var _swiper = new Swiper('.target-wrap', {
            paginationClickable: true,
            slidesPerView: 1,
            spaceBetween: 0,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            pagination: '.swiper-pagination',
            paginationType: 'fraction',
            autoHeight: true,
            grabCursor: true,
            onSlideChangeEnd: function (swiper) {
                var index = swiper.activeIndex;
              
            }
        });
```



중요한 속성은 

"onSlideChangeEnd"  스와이프가 끝날때 이벤트를 발생시킨다.  다른 메뉴와 활성화 연동할때 callBack 처리할때 유용하다.

"autoHeight"  각 스와이프될 컨텐츠 높이가 각각 다를때 위의 속성을 추가해놓으면 자동높이 재조정된다. 

"slidesPerView"  한번에 몇개씩 보여줄것인지

이정도만 잘활용되어도, 괜찮을것같다.
