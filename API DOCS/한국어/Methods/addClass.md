# addClass(className)

> className : `String`  
  추가할 클래스 이름입니다.

---

객체에 클래스를 추가합니다. LveJS 에서 생성된 객체는 고유한 이름을 가지지만, 클래스로 객체 사이의 그룹을 만들 수 있습니다.

클래스는 무한히 추가할 수 있습니다. 이미 추가된 클래스 이름은 중복되지 않습니다.

아래 예시를 보십시오.

```
// squareA, squareB 객체는 똑같은 square 클래스를 가집니다.
lve('squareA').addClass('square')
lve('squareB').addClass('square')
```

만일 다수의 클래스 이름을 주고 싶다면, 띄어쓰기로 구분하십시오.

```
// squareA 객체는 square, block 2개의 className 을 가집니다.
lve('squareA').addClass('square block')
```

---

# addClass(fn)

> fn : `Function`  
  객체 자신을 `this`로 가지는 함수를 실행하고 반환값을 클래스 이름으로 받습니다.

---

또 다른 방법으로는 `fn` 매개변수로 함수를 넘기는 방법이 있습니다.  
이는 각각의 객체에 고유한 클래스를 주고 싶을 때 유용합니다.

```
lve('squareA').addClass(function () {

  // this 는 객체 자기자신을 의미합니다
  console.log(`이 객체의 이름은 ${this.name} 입니다!`)

  // 이 객체 각각에 'square_이름' 형식으로 클래스를 추가합니다.
  return `square_${this.name}`

})
```

---

> return : `LveJSObjectSession` | `LveJSObject`