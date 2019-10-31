# from(target)

> target : `LveJSObjectSession` | `LveJSObject` | `String`  
  복사할 원본 객체입니다. 원본 객체의 이름을 넣어도 됩니다.

---

객체를 복사해서 새롭게 만듭니다.  
target 매개변수로는 복사할 원본 객체를 받습니다. 또는 원본 객체의 이름을 넣어도 됩니다.  
만일 2개 이상의 객체를 입력받았을 경우, 첫 번째 객체가 복사됩니다.

복사된 객체는 원본 객체의 속성과 스타일, 데이터를 포함해 모든 값이 깊은복사(deep copy) 됩니다. 따라서 복사된 객체의 속성을 수정해도 원본 객체에 영향을 미치지 않습니다.

아래 예제를 확인하십시오.

```
// 사각형 객체를 만들고 색상을 지정했습니다.
lve('square').create({ type: 'square' }).css({ color: 'red' })

// copy 라는 이름의 새로운 객체를 만들었습니다. 이 객체는 똑같은 위치에, 똑같은 모양으로 생성됩니다.
lve('copy').from(square)
```

---

> return : `LveJSObject`