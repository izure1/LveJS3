# LveJS.on(event, handler)

> event : `String`
  등록할 이벤트 이름입니다.

> handler : `Function`  
  이벤트가 발생했을 경우, 호출될 핸들러 함수입니다.

이벤트는 LveJS 객체를 제어할 수 있는 가장 좋은 방법 중 하나입니다.  
가령, 객체를 클릭했을 때, 특정 작업을 하고 싶다면 `LveJSObjectSession.prototype.on` 메서드를 이용할 수 있습니다. 아래와 같습니다.

```
lve('yourObject').on('click', e => {

  console.log(`${e.target.name} 객체가 클릭됨!`)

})
```

하지만 만일 위와 같이 모든 객체에 이벤트를 등록하면 어떻게 해야할까요?  
아래와 같은 경우를 생각해볼 수 있습니다.

```
// 100000개의 객체에 모두 이벤트를 등록하고 싶다면...?
for (let object of AllObjects) {

  object.on('click', e => {

    console.log(`${e.target.name} 객체가 클릭됨!`)

  })

}
```

자, 객체 하나하나마다 이벤트 핸들러 함수가 새롭게 등록되었습니다.  
이는 끔찍한 메모리의 낭비입니다. 똑같은 역할을 하는 함수가 수도없이 등록되었기 때문이죠.

따라서 LveJS에서는 전역 이벤트라는 개념이 있습니다.  
전역에 이벤트를 등록하는 방식입니다. 아래와 같습니다.

```
lve.on('click', e => {

  console.log(`${e.target.name} 객체가 클릭됨!`)

})
```

전역 이벤트를 이용하면, 모든 객체에 이벤트 핸들링을 할 수고를 줄일 수 있습니다.

---

> return : `lve`