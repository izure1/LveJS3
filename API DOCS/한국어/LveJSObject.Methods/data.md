# data(properties)

> properties : `Object`  
  변경할 데이터 속성들입니다.

---

객체의 데이터를 변경합니다. 객체에 사용자가 원하는 정보를 저장할 수 있습니다.  
`attr` 메서드와는 달리, 객체에 영향을 주지 않습니다.  
아래 예제를 참고하십시오.

```
// 객체의 age, job 데이터를 각각 생성하거나 변경합니다.
lve('yourObject').data({
  age: 17,
  job: 'student'
})
```

---

# data(property, value)

> property : `String`  
  변경할 데이터 속성명입니다.

> value : `String` | `Number`  
  변경할 값입니다.

---

1개의 데이터 속성만을 변경할 것이라면, 단축형으로 사용할 수 있습니다.  
아래 예제를 참고하십시오.

```
lve('yourObject').data('age', 17)
```

---

# data(property)

> property : `String`  
  값을 받아올 객체의 속성명입니다.

---

객체의 데이터 속성값을 받아오고 싶다면 아래와 같이 사용하십시오.  
만일 `LveJSObjectSession`에 2가지 이상의 객체가 담겨 있을 경우, 첫 번째 객체의 값이 반환됩니다.

```
const age = lve('yourObject').data('age')
```

---

> return : `LveJSObjectSession` | `LveJSObject`