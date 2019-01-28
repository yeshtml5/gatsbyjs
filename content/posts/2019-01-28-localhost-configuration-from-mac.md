---
template: post
title: localhost configuration from MAC
slug: localhost-configuration
draft: false
date: 2019-01-28T09:02:20.806Z
description: >-
  Mac에서 localhost 설정하는방법이다. windows User에서 IIS 설정처럼 특별한 로컬에서 간단한 서버설정을해서 절대 path
  ("/") 사용하고 싶을때, 혹은 php연동할때 편하게 설정해보자.
category: Setup
tags:
  - mac
  - localhost
  - setup
---
### 세팅을 하지않았다면,

* 브라우져에서 http://localhost 만 했을때
  ![](/media/99c31a3b5bf3c0e02f.png)

위와같은 화면이 나올것이다. 

## 우리가 하고자하는것은

* Mac에서 DocumentRoot 를 설정하자
* PHP 연동시켜서 최소 include 정도는 할수있게 하자.

### \[아파치 실행]

```
sudo apachectl start
```

이미 실행된상태에서 같은 명령어를 실행하면\
_/System/Library/LaunchDaemons/org.apache.httpd.plist: service already loaded_   같은 메시지 나올것이다.

### \[php 사용가능하도록 아파치 설정]

```
sudo vi /etc/apache2/httpd.conf  
```

![](/media/997a693b5bf3c0e103.png)

```
# from #LoadModule php7_module libexec/apache2/libphp7.so
```

에서 "#" 를 제거한다.

### DocumentRoot 설정
 DocumentRoot에서 원하는 폴더로 설정하자

![](/media/99a52e3b5bf3c0e230.png)
```
sudo vi /etc/apache2/httpd.conf
```
`/DocumentRoot` 로 검색하면 쉽게 찾을수있다.


vi에디터에서는 :wq  로 저정하자. 
그리고 아파치 재실행명령어

```
sudo apachectl restart
``` 

그리고 필자보다 더욱더 자세히 적은 글은 다음 링크로 대체한다.   
<https://websitebeaver.com/set-up-localhost-on-macos-high-sierra-apache-mysql-and-php-7-with-sslhttps#create-sites-folder>
