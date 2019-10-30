# LveJS.off(event [, handler])

> event : `String`
  삭제할 이벤트 이름입니다.

> handler : `Function`  
  삭제할 이벤트의 핸들러 함수입니다. 이 값을 입력하지 않으면, LveJS에 등록된 모든 `event` 이벤트와 관련된 핸들러 함수를 삭제합니다.  
  기본값은 `null`입니다.

`lve.on` 함수로 LveJS 월드에 전역으로 등록된 이벤트를 삭제합니다.

```
lve.off('click') // 전역으로 등록된 모든 click 이벤트가 삭제됩니다.
```

---

> return : `lve`