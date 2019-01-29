---
template: post
title: macOS(모하비) 터미널에서 git clone 이 안될때
slug: osx-git-error
draft: false
date: 2019-01-29T02:51:11.990Z
description: >
  OSX Mojave 업데이트하면서 git이 안되어서, 문제점을 찾아보았다.   

  xcrun: error: invalid active developer path
  (/Library/Developer/CommandLineTools), missing xcrun at:
  /Library/Developer/CommandLineTools/usr/bin/xcrun
category: Experience
tags:
  - OSX
  - Mojave
---
## Mac 업데이트이후 git이 안되어서 찾아봤다.

git clone을 하던중에 갑자기 에러가 안나와서 고민하다, google통해서 찾아봤다.
에러메시지는 잘쓰다가, 모하비OS로 (다크테마를 쓰고싶었다.)\
다시 clone을 하다보니, 아래와같은 형태가 되었다.

'
"xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun"
'

![](/media/99df263d5c145b6e28.png)

도움이 되었던, 사이트는 다음과 같다.  
<https://apple.stackexchange.com/questions/254380/macos-mojave-invalid-active-developer-path>

OSX Mojave 이후에 이런현상이 종종있는것같다.

일단 포스트해두고, 이런문제 고민했던 분이면 도움이 되었으면 좋겠다.
