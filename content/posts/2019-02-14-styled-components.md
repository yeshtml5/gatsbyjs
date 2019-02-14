---
template: post
title: styled-components
slug: styled-components-prologue
draft: false
date: 2019-02-14T10:02:36.294Z
description: 'React에서 스타일링 할때 많이 사용하는 styled-components에 대해서 정리하면서, 먼저 초입부분에 대해서 적어보고자한다.'
category: Front-End
tags:
  - react
  - styled-components
---
## prologue
웹혹은 모바일프로젝트를 하면 **스타일가이드** 라는것을 만든다.  
업계마다 조금씩 용어가 다를수있는데 웹스타일가이드(WSG) 라고해서 
html의 태그요소와 클래스를 정의해둔다. 디자인적인 가이드이면서, 퍼블리셔들이 공통클래스를 정의해서 PL이 정의해두면 나머지는 페이지를 만들어내는것이다.   
예들들면
```css{}
//Heading
p{font-size:24px}
p.warn{ 빨간색, 정신차려, }
div.desc{설명글,자세히 읽어등..}
```
나름 괜찮은방법이긴하지만, React로 넘어오면서 개발적으로 components화 시킬수있게  

```javascript{}
<Background minHeight="300px"/>
//이미지를 라운드형 , 동그라미
<Image rounded/>
<Styled>
  {/*
    theme={
      color:#111,
      background:orange
    }
  */}
  <Button theme={{ color: 'purple', border: '1px solid #111' }}>primary Button</Button><
  <Button success text="버튼증가" onClick={() => this.modify(count + 1)}/>
</Styled>
```
해서 components를 조금더 알아보기쉽게하고 무엇보다 최종목표는   
<https://material-ui.com/>와 같은 형태를 만드는것이다. 

- github에서는 <https://github.com/yeshtml5/dev/blob/master/src/components/template.js> 에서 업데이트 될것이고,
- Demo <https://dev.yeshtml5.com/guide/> 에서 확인할수있다. 

**만들고있고, 계속 업데이트 할 예정이다.**

#### 참고사이트
- <https://www.styled-components.com/>
- <https://hudi.kr/styled-components-%EC%8A%A4%ED%83%80%EC%9D%BC%EC%9D%84-%ED%92%88%EC%9D%80-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8/> 
