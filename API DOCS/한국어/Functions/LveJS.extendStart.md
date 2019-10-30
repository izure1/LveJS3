# LveJS.extendStart(callback)

> callback : `Function`  
  작동할 함수입니다.

매 프레임의 시작마다 작동할 함수를 지정합니다.  
객체들의 `animate` 를 포함한 정보가 업데이트 되기 전에 작동합니다.

---

```
lve.extendStart(tt => {

  if (lve.current.keyboard.A.isDown) {
    // TODO your job
  }

})
```

---

> return : `lve`