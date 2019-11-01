# toggleClass(className)

> className : `String`  
  반전할 클래스 이름입니다.

---

객체에 클래스를 추가하거나 제거합니다.  
이 객체가 해당 클래스를 가지고 있다면 제거하고, 가지지 않았다면 추가합니다.

아래 예시를 보십시오.

```
// squareA 객체는 square 클래스를 가지고 있습니다.
lve('squareA').addClass('square')

// squareB 객체는 square 클래스를 가지고 있지 않습니다.
lve('squareB').removeClass('square')


// squareA 객체의 square 클래스는 toggleClass 메서드로 인해 제거됩니다.
lve('squareA').toggleClass('square')

// squareB 객체의 square 클래스는 toggleClass 메서드로 인해 추가됩니다.
lve('squareB').toggleClass('square')
```

만일 다수의 클래스 이름을 반전하고 싶다면, 띄어쓰기로 구분하십시오.

```
// squareA 객체는 square, block 2개의 className을 추가하거나 제거합니다.
lve('squareA').toggleClass('square block')
```

---

# toggleClass(fn)

> fn : `Function`  
  객체 자신을 `this`로 가지는 함수를 실행하고 반환값을 클래스 이름으로 받습니다.

---

또 다른 방법으로는 `fn` 매개변수로 함수를 넘기는 방법이 있습니다.  
이는 각각의 객체에 고유한 클래스를 추가/제거하고 싶을 때 유용합니다.

```
lve('squareA').toggleClass(function () {

  // this 는 객체 자기자신을 의미합니다
  console.log(`이 객체의 이름은 ${this.name} 입니다!`)

  // 이 객체 각각에 'square_이름' 형식으로 클래스를 추가하거나 제거합니다.
  return `square_${this.name}`

})
```

---

> return : `LveJSObjectSession` | `LveJSObject`