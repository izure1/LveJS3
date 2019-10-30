# LveJS.extend(name, callback)

> name : `String`  
  확장할 메서드의 이름입니다.

> callback : `Function`  
  확장할 메서드의 함수입니다.

---

생성된 LveJS 객체의 메서드를 확장합니다.  
이는 `LveJSObjectSession.prototype[name] = callback` 과 동일한 역할을 수행합니다.

---

```
lve.extend('sayMyName', function () {

  console.log(`my name is ${this.name}`)

})

lve('square').saveMyName()
```

---

> return : `lve`