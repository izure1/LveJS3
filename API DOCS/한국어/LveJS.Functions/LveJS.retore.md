# LveJS.restore(savedata)

> savedata : `Object` { camera, renderer, physics, objects }

---

매개변수 `savedata`을 이용하여 LveJS 월드의 상황을 복구합니다.
자세한 내용은 [`lve.save`](./LveJS.save.md) 함수 문서를 참고하십시오.

```
// 현재 상황을 저장하기
const savedata = lve.save()

// 저장되었던 상황을 복구하기
lve.restore(savedata)
```

---

> return : `lve`