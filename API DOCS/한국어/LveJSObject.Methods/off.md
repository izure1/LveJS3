# off(event [, handler])

> event : `String`  
  삭제할 이벤트 이름입니다.

> handler : `Function`  
  삭제할 이벤트의 핸들러 함수입니다. 이 값을 입력하지 않으면, 해당 객체에 등록된 모든 `event` 이벤트와 관련된 핸들러 함수를 삭제합니다.  
  기본값은 `null`입니다.

---

`on` 메서드로 해당 객체에 등록된 이벤트를 삭제합니다.

```
// yourObject 객체에 등록된 모든 click 이벤트가 삭제됩니다.
lve('yourObject').off('click')
```

한번에 여러 이벤트를 제거하고 싶다면, 띄어쓰기로 구분하십시오.

```
lve('yourObject').off('click mousedown mouseup')
```

---

> return : `LveJSObjectSession` | `LveJSObject`