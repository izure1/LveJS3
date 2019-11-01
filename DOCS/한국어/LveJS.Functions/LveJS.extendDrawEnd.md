# LveJS.extendDrawEnd(callback)

> callback : `Function`  
  작동할 함수입니다.

---

매 프레임마다 화면에 모든 객체가 그려진 이후 작동할 함수를 지정합니다.

```
lve.extendDrawEnd(tt => {

  if (lve.current.keyboard.A.isDown) {
    // TODO your job
  }

})
```

---

> return : `lve`