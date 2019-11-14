# sprite(options)

> options : `Object` { name, current }

---

`sprite` 타입의 객체에 스프라이트 설정을 합니다.  
사용할 수 있는 옵션은 다음과 같습니다.

> options.name : `String`  
  객체에서 재생할 스프라이트 모션의 이름입니다.

> options.current : `Number`  
  현재 스프라이트가 재생되고 있는 모션의 인덱스입니다.  
  기본값은 `0`입니다.

예시는 아래를 참고하십시오.

```
lve('spriteObject').sprite({
  name: 'walk-right'
})
```

---

# sprite(option, value)

> option : `String`  
  변경할 스프라이트 속성명입니다.

> value : `String` | `Number`  
  변경할 값입니다.

---

1개의 스프라이트 속성만을 변경할 것이라면, 단축형으로 사용할 수 있습니다.  
아래 예제를 참고하십시오.

```
lve('yourObject').sprite('name', 'walk-right')
```

---

# sprite(option)

> option : `String`  
  값을 받아올 객체의 스프라이트 속성명입니다.

---

객체의 스프라이트 속성값을 받아오고 싶다면 아래와 같이 사용하십시오.  
만일 `LveJSObjectSession`에 2가지 이상의 객체가 담겨 있을 경우, 첫 번째 객체의 값이 반환됩니다.

```
const name = lve('yourObject').sprite('name')
```

---

> return : `LveJSObjectSession` | `LveJSObject`
