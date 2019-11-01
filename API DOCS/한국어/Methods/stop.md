# stop([property])

> property : `String`  
  애니메이션을 중지할 객체의 속성입니다.

---

`animate` 메서드로 진행 중인 애니메이션을 중지합니다.  
가령, `style.left` 속성을 애니메이션 중이고 이것을 중지하고 싶다면, `property` 매개변수로 `style.left` 값을 입력하십시오. 아래 예제를 확인하십시오.

```
// 현재 진행중인 style.left 애니메이션을 중단합니다.
lve('yourObject').stop('style.left')
```

만일 `property` 매개변수를 입력하지 않을 경우, 현재 진행 중인 모든 애니메이션을 중지합니다.

```
// 모든 애니메이션을 중단합니다.
lve('yourObject').stop()
```

---

> return : `LveJSObjectSession` | `LveJSObject`
