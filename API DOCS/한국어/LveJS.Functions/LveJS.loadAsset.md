# LveJS.loadAsset(urls [, callback])

> urls : `Array` | `String`  
  불러올 에셋의 경로입니다. 여러개를 불러올 경우, 배열로 입력하십시오.

> callback : `Function`  
  에셋이 불러와질 때 마다 호출될 함수입니다.  
  함수의 매개변수는 에셋의 변환된 `blob url`입니다.

---

LveJS에서 사용할 에셋를 미리 불러옵니다.  
게임이 시작되지 전에, 미리 불러오면 이후에 에셋의 로딩 시간을 크게 줄일 수 있습니다.

게임이 작동된 이후에도 사용할 수 있습니다.
`lve.loadAsset` 함수로 모든 에셋을 불러오기 전까지, `lve.ready` 함수는 대기합니다.

```
lve.loadAsset([
  'https://...',
  'https://...',
  'https://...'
]).ready(() => {

  // 모든 에셋이 불러와지기 전까지, lve.ready 함수는 동작하지 않습니다.
  // TODO

})
```

---

> return : `lve`