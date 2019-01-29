---
template: post
title: utterances 적용기
slug: utterances-apply
draft: false
date: 2019-01-29T04:01:02.174Z
description: |
  static site generator 를 사용하면서, 코멘트 정도 달수있는 위젯을 검토하던중, utterances 발견하고, 적용하고
  제작자에게 Pull request를 요청한 post이다.
category: Experiance
tags:
  - utteranc
  - blog
---
### Need

Gatsby + react + netlify 조합으로 **static site generator** 사용하면서, 댓글같은 comments 를 하나 달아야겠다는 생각이 들어서 찾아보고있었다.\
찾아본 결과 3가지정도 나왔다.

### Search

* Facebook의 댓글관리 <https://developers.facebook.com/docs/plugins/comments?locale=ko_KR>
* SNS및 자체회원가입을 통한 피드백 가능한 Disqus <https://help.disqus.com/>
* Github만으로 피드백 가능한 utteranc <https://utteranc.es/>

### Adopt

 ** utteranc ** 사용하기로 했다.\
먼저 댓글을 관리하기 위해서 새로운 사이트에 로그인해서 들어가고 싶지않았다.\
또한 디자인적으로 심플했으면 좋겠고, disqus의 경우 유료와 무료가 나누어져있었다. 자주 github를 사용하니 github의 이슈관리쪽에 댓글이 관리되니, 웹사이트에서 댓글뿐 아니라, **github에서도 피드백을 달수있는 점이 가장 마음**에 들었다.  

### how it works  (<https://utteranc.es/>참고)

```
When Utterances loads, the GitHub issue search API is used to find the issue associated with the page based on url, pathname or title. If we cannot find an issue that matches the page, no problem, utterances-bot will automatically create an issue the first time someone comments.

To comment, users must authorize the utterances app to post on their behalf using the GitHub OAuth flow. Alternatively, users can comment on the GitHub issue directly.
```

### How

1. 자신의 github에서 새로운 repo를 만든다. (블로그 이슈만을 위해서)
2. 권한설정을 해준다.
3. <https://utteranc.es> 에서 이슈관리를 어떻게 할것인지 설정한다.

```javascript
<script src="https://utteranc.es/client.js"
        repo="[ENTER REPO HERE]"
        issue-term="pathname"
        label="my-id/repo"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
```

을 통해서 **Blog Post ↔️ Issue Mapping** 방법을 설정할수있다.
필자는 url 기반으로 했다.

### And then?

* https://github.com/utterance/utterances/edit/master/SITES.md 에 PR요청을 했다.
* 1일정도 지나서 승락해서 적용사이트에 추가를 했다.
* google analytics 확인결과 영미쪽 방문자가 많이 늘었다.

### Problem?

* ![](/media/utterances-apply.png) 권한문제가 이렇게 나와도 적용은 되었다.
* reactJS 사용자라면, <https://www.npmjs.com/package/react-utterances> 참조하자.
