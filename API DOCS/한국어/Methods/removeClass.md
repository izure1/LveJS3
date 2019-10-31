# removeClass(className)

> className : `String`  
  삭제할 클래스 이름입니다.

---

객체의 클래스를 삭제합니다. 아래 예시를 보십시오.

```
// squareA 객체의 square 클래스를 삭제합니다.
lve('squareA').removeClass('square')
```

만일 다수의 클래스를 삭제하고 싶다면, 띄어쓰기로 구분하십시오.

```
// squareA 객체의 square, block 클래스를 삭제합니다.
lve('squareA').removeClass('square block')
```

---

# removeClass(fn)

> fn : `Function`  
  객체 자신을 `this`로 가지는 함수를 실행하고 반환값을 클래스 이름으로 받습니다.

---

또 다른 방법으로는 `fn` 매개변수로 함수를 넘기는 방법이 있습니다.  
이는 각각의 객체에 고유한 클래스를 삭제하고 싶을 때 유용합니다.

```
lve('squareA').removeClass(function () {

  // this 는 객체 자기자신을 의미합니다
  console.log(`이 객체의 이름은 ${this.name} 입니다!`)

  // 이 객체 각각에 'square_이름' 형식의 클래스를 삭제합니다.
  return `square_${this.name}`

})
```

---

> return : `LveJSObjectSession` | `LveJSObject`