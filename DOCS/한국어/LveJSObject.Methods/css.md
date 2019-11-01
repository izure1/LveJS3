# css(properties)

> properties : `Object`  
  변경할 스타일 속성들입니다.

---

객체의 스타일 속성을 변경합니다. 아래 예제를 참고하십시오.

```
// 객체의 width, height 속성을 각각 변경합니다.
lve('yourObject').css({
  width: 0.5,
  height: 2
})
```

---

# css(property, value)

> property : `String`  
  변경할 스타일 속성명입니다.

> value : `String` | `Number`  
  변경할 값입니다.

---

1개의 스타일 속성만을 변경할 것이라면, 단축형으로 사용할 수 있습니다.  
아래 예제를 참고하십시오.

```
lve('yourObject').css('width', 0.5)
```

---

# css(property)

> property : `String`  
  값을 받아올 객체의 속성명입니다.

---

객체의 스타일 속성값을 받아오고 싶다면 아래와 같이 사용하십시오.  
만일 `LveJSObjectSession`에 2가지 이상의 객체가 담겨 있을 경우, 첫 번째 객체의 값이 반환됩니다.

```
const width = lve('yourObject').css('width')
```

---

> return : `LveJSObjectSession` | `LveJSObject`