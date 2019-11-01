# LveJS.extendDrawStart(callback)

> callback : `Function`  
  작동할 함수입니다.

---

매 프레임마다 화면에 객체가 그려지기 이전에 작동할 함수를 지정합니다.

```
lve.extendDrawStart(tt => {

  if (lve.current.keyboard.A.isDown) {
    // TODO your job
  }

})
```

---

> return : `lve`