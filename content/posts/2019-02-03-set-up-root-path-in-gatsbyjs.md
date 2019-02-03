---
template: post
title: 'Set up root-path in Gatsbyjs. '
slug: root-path-gatsbyjs
draft: false
date: 2019-02-03T12:09:04.335Z
description: |-
  Gatsbyjs 에서 Root 디렉토리를 설정하는법을 적어보자. 
  간단한 depth면 궂이 쓸필요는없을듯하나, depth가 길어지면 필요해 보인다.
category: Front-end
tags:
  - gatsbyjs
---
## I want..

`import Layout from '../../../../components/layout'`  
to  
`import Layout from 'src/components/layout'`

gatsbyjs에서 depth가 길어지면 참고하고있는 상위 component 들은 ../../ 상대적으로 들어가야한다.  *../../* 2개정도면 어찌해볼수있겠으나, 많으면 힘들다.
2개이상일경우는 절대path를 설정하는법을 알아보자.   

## step1
`
npm install --save-dev gatsby-plugin-root-import

or

yarn add --dev gatsby-plugin-root-import
`
2가지중 npm패키지를 사용하던 yarn으로 사용해서 설치하자


## step2
** gatsby-config.js **에서  

`
module.exports = {
  plugins: [ 

    'gatsby-plugin-root-import'
  ]
}
`  
기본설정은 src 로 설정되어있다.   

> Webpack v4 drops resolve.root in favor of resolve.alias found here.  
If no options are specified, the plugin creates a default alias of src to your project src folder.  
This means you should be able to import modules like such:

만약 바꾸고자한다면  
`
const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages')
      }
    }
  ]
}
`
## 출처 및 참고  
<https://www.gatsbyjs.org/packages/gatsby-plugin-root-import/>
