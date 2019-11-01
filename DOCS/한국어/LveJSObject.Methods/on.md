# on(event, handler)

> event : `String`  
  등록할 이벤트 이름입니다.

> handler : `Function`  
  이벤트가 발생했을 경우, 호출될 핸들러 함수입니다.

---

이벤트는 LveJS 객체를 제어할 수 있는 가장 좋은 방법 중 하나입니다.

가령, 객체를 클릭했을 때, 특정 작업을 하고 싶다면 `on` 메서드를 이용할 수 있습니다.  
아래와 같습니다.

```
lve('yourObject').on('click', e => {

  console.log(`${e.target.name} 객체가 클릭됨!`)

})
```

만일 전역에 이벤트를 등록하고 싶다면, [`LveJS.on`](../Functions/LveJS.on.md) 함수 문서를 참고하십시오.

한번에 여러 이벤트를 등록하고 싶다면, 띄어쓰기로 구분하십시오.

```
lve('yourObject').on('click mousedown mouseup', e => {

  console.log(`${e.type} 이벤트가 발생됨!`)
  
})
```

---

> return : `LveJSObjectSession` | `LveJSObject`