# LveJS.extendEnd(callback)

> callback : `Function`  
  작동할 함수입니다.

---

매 프레임의 끝에서 작동할 함수를 지정합니다.  
객체들의 `animate` 를 포함한 정보가 업데이트 된 이후 작동합니다.

```
lve.extendENd(tt => {

  if (lve.current.keyboard.A.isDown) {
    // TODO your job
  }

})
```

---

> return : `lve`