# once(event, handler)

> event : `String`  
  등록할 이벤트 이름입니다.

> handler : `Function`  
  이벤트가 발생했을 경우, 호출될 핸들러 함수입니다.

---

객체에 이벤트를 등록합니다. `on` 메서드와 비슷합니다.  
하지만 `once` 메서드로 등록된 핸들러는 한 번만 동작하고 제거됩니다.

이벤트 핸들링이 궁금하다면, [`on`](./on.md) 메서드 항목를 참고하십시오.

---

> return : `LveJSObjectSession` | `LveJSObject`