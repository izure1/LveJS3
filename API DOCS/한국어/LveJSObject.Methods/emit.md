# emit(event, detail)

> event : `String`  
  발생한 이벤트 종류입니다.

> detail : `Event`
  이벤트의 상세 정보입니다. 상세 정보는 추후 `LveJSEvent.originalEvent` 속성에 담기거나, 이벤트 자체의 속성이 됩니다.

---

해당 객체에서 이벤트를 강제로 발생시킵니다.  
아래는 클릭 위치를 기반으로 이벤트를 강제로 발생시키는 예제입니다.

```
lve('yourObject').on('click', e => {

  // 캔버스를 클릭했던 마우스 이벤트 정보가 LveJSEvent로 생성되어 넘어옵니다.
  // e.originalEvent 속성에는 마우스의 원본 이벤트 데이터가 담겨 있습니다.
  console.log(e)

})

canvas.addEventListener('click', e => {

  // 캔버스를 클릭할 때 마다 마우스 클릭 정보를 detail 매개변수로 넘깁니다.
  lve('yourObject').emit('click', e)

})
```

---

> return : `LveJSObjectSession` | `LveJSObject`