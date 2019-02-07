---
template: post
title: Dive in unsplash
slug: Dive-in-unsplash
draft: false
date: 2019-02-07T15:44:29.941Z
description: |-
  이미지를 가져와서 갤러리를 만들때, 참고하면 좋은사이트인 "unsplash" 를 소개하고자한다.  
  이미지자체도 free이미지가 많지만, 무엇보다 api 를 통해서 나만의 갤러리를 만들어보자.
category: Experience
tags:
  - unsplash
  - dev
  - api
---
### What's unsplash
unsplash 는
> Make something awesome.
Over 850,000 free (do-whatever-you-want) high-resolution photos brought to you by the world’s most generous community of photographers.

이다. 출처 <https://unsplash.com/about>

### Free?
그렇다. 무료다. 상업적라이센스도 상당수 무료다. 확인해보자.

### 어떻게활용할수있을까?
먼저 사진에 대한 퀼리티는 높다. 필자는 마음이 심린할때 바탕화면을 자주 바꾼다.   
사용하고있는 상당수 wallpaper를 이곳에서 받을수있다.
퍼블리싱 샘플로 할때 이미지를 더미이미지를 필요할때

```
<img src="https://source.unsplash.com/random">
```
가져올수있다. 

하지만 무엇보다 공유하고싶은것은 
```
unsplash.search.photos("explore", 1, 1);
{
  "total": 3451,
  "total_pages": 3451,
  "results": [
    {
      "id": "eOLpJytrbsQ",
      "created_at": "2014-11-18T14:35:36-05:00",
      "width": 4000,
      "height": 3000,
      "color": "#A7A2A1",
      "likes": 286,
      "user": {
        "id": "Ul0QVz12Goo",
        "username": "ugmonk",
        "name": "Jeff Sheldon",
        "first_name": "Jeff",
        "last_name": "Sheldon",
        "portfolio_url": "http://ugmonk.com/",
        "profile_image": {
          "small": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=7cfe3b93750cb0c93e2f7caec08b5a41",
          "medium": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=5a9dc749c43ce5bd60870b129a40902f",
          "large": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=32085a077889586df88bfbe406692202"
        },
        "links": {
          "self": "https://api.unsplash.com/users/ugmonk",
          "html": "http://unsplash.com/@ugmonk",
          "photos": "https://api.unsplash.com/users/ugmonk/photos",
          "likes": "https://api.unsplash.com/users/ugmonk/likes"
        }
      },
      "urls": {
        "raw": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f",
        "full": "https://hd.unsplash.com/photo-1416339306562-f3d12fefd36f",
        "regular": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515",
        "small": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=263af33585f9d32af39d165b000845eb",
        "thumb": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=8aae34cf35df31a592f0bef16e6342ef"
      },
      "links": {
        "self": "https://api.unsplash.com/photos/eOLpJytrbsQ",
        "html": "http://unsplash.com/photos/eOLpJytrbsQ",
        "download": "http://unsplash.com/photos/eOLpJytrbsQ/download"
      }
    }
  ]
}
```

이런형태로 json으로 받을수있다. 
물론 회원가입과 API는 필요하다. 
reactjs 갤러리 만들어둔 페이지를 공유한다.  
__<https://dev.yeshtml5.com/api/unsplash>__ 에서 확인가능하며
[GIT](https://github.com/yeshtml5/dev) 에 올려두었다.


## 참고사이트
- <https://unsplash.com/>
- <https://source.unsplash.com/>
- <https://unsplash.com/developers>
