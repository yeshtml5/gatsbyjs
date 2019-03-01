---
template: post
title: Gatsbyjs 에서 Markdown파일 읽고 쓰기.
slug: gatsbyjs-markdown
draft: false
date: 2019-02-19T04:07:51.002Z
description: Gatsbyjs에서 markdown을 읽고 쓰는 법을 적용해보자.
category: Front-End
tags:
  - gatsbyjs
---
### Plugins needs
- gatsby-transformer-remark
- gatsby-source-filesystem

**gatsby-config.js** 에서
```javascript
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static`,
        name: 'static',
      },
    },
```
### 참고사이트
- <https://www.youtube.com/watch?v=n1NaVkKdrwc&t=324s>
- <https://www.youtube.com/watch?v=VxVKMJThh04>
