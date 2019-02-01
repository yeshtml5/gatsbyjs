---
template: post
title: 'netlify.com '
slug: netlify-error-case1
draft: false
date: 2019-02-01T02:02:55.865Z
description: >
  어제 10시부터 yeshtml5.com 장애가 났다. 따로 서버설정으로 돌아가는것이 아니라 github 기반으로 "static page
  generator github" 방식이라 로그확인이 없어서 장애해결을 공유해본다.
category: Experience
tags:
  - netlify
  - error
---
## problem finding
 퇴근하고 집에가던중 모바일로 접속을 해보니 연결이 되지않았다. 
캐쉬문제인가 싶어서, 캐쉬를 지웠는데도 접속이 되지않았다. 
최근에 문제가 일어난 github쪽에 다운이 있었는데 그문제도 아니었다.  
<http://netlify.com> 관리자모드에 들어가서 몇일전으로 다시 deploy를 했다.  
그래도 되는듯하다가 작동이 안되었다.    
일단 집에도착해서 다시 검토했다.

## What's the problem?

- github는 잘돌아간다. 
- gatsby develop && gatsby build  로컬에서 잘돌아간다.
- netlify.com 관리자및 배포는 잘되었다.
- 동일서비스인 <https://dev.yeshtml5.com> 작동은 된다.
- 마지막 도메인 연결을 체크해본다.

## The cause is domain setting.

- https://yeshtml5.netlify.com 작동ok
- https://yeshtml5.com  작동 no

`도메인을 재설정하고 지우고 재설정하니 잘 작동되었다.`

관련내용은 <https://www.netlify.com/docs/custom-domains/#dns-configuration> 표시해둔다.


![](/media/netlify.com_error_shot.png)

지금은 잘된다. 그래도 가끔식안되면 도메인부터 찾아보자.
