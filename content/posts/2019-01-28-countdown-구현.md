---
template: post
title: Countdown 구현
slug: jquery-countdown
draft: false
date: 2019-01-28T09:48:21.406Z
description: |-
  이벤트 특히 쇼핑몰쪽에서 마감세일 등 종료시간 임박!! 등 시간을 역순으로 보여줄 필요가 있다.  
  생각해보면, 서버쪽에서 시간을 체크해서, 한번의 ajax 처리이후 역순으로 계산하는 방법이 있을것이다.  
  혹은 매초마다 서버시간을 가져올수도 있을것이다.
category: Front-End
tags:
  - javascript
  - countdown
  - jquery
---
## 카운트다운 ( jquery기반)

 이벤트 특히 쇼핑몰쪽에서 마감세일 등 종료시간 임박!!  등 시간을 역순으로 보여줄 필요가 있다.   
생각해보면,  서버쪽에서 시간을 체크해서, 한번의 ajax 처리이후 역순으로 계산하는 방법이 있을것이다. 
혹은 매초마다 서버시간을 가져올수도 있을것이다. 

 프로젝트하다보면 벡엔드쪽과 사이가 안좋거나, 혼자서해야될때, 그리고 global 서비스할때, 각각의 로컬시간을 대비해서 구할때  나름 편하게 사용할수있는 
jquery 기반으로 된 플러그인을 소개한다. 

<http://hilios.github.io/jQuery.countdown/>

![](/media/9971d3365be145d70b.png)


기본적인 구현은 위의 Document를 봐도 구현이 어렵지는 않을것이다. 
다만, timezone을 이용해서 구현을 한다면  

<http://momentjs.com/docs/>  를 참고해서 같이 사용해야한다. 

![](/media/9951303e5be1463c1d.png)

아래의 코드로 실사용예를 보여준다.    
 아래코드는  PHP 기반으로 환경변수 설정해서 다른 코드가 있는데 결국 순서대로 js 가져와서 쓰면된다. 
```javascript
<!--타이머시작-->
<script type="text/javascript" src="<?= __PATH__; ?>src/js/lib/moment.min.js"></script>
<script type="text/javascript" src="<?= __PATH__; ?>src/js/lib/moment-timezone-with-data.min.js"></script>
<script type="text/javascript" src="<?= __PATH__; ?>src/js/lib/jquery.countdown.js"></script>
<script type="text/javascript">
    (function ($) {
        function setup() {
            var nextYear = moment.tz("2018-12-31 00:00", "Asia/Seoul");
            $('#countTimer').countdown(nextYear.toDate(), function (event) {
                $(this).html(
                    event.strftime('<span class="day">%D</span> days <span class="hour">%H</span>:%M:%S')
                );
            });
 
        }
 
        $(document).ready(function () {
            setup();
        });
    })($);
</script>
<!--타이머종료-->
```
