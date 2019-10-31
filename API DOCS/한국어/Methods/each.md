# each(callback)

> callback : `Function`

---

선택된 모든 객체 각각에 원하는 작업을 할 수 있도록 도와주는 메서드입니다.

`callback` 매개변수 함수의 `this`는 선택된 각 객체를 가르킵니다.  
아래 예제를 참고하십시오.

```
// square 라는 클래스를 가진 모든 객체를 검색하고, 객체의 이름을 출력합니다.
lve('*').findClass('square').each(() => {

  console.log(`현재 객체의 이름은 ${this.name} 입니다!`)

})
```

---

> return : `LveJSObjectSession` | `LveJSObject`