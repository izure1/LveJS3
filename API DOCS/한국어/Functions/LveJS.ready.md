# LveJS.ready(callback)

> callback : `Function`  

게임이 정상적으로 플레이가 가능해질 때 까지 대기합니다.  
정상적인 플레이가 가능해질 때라는 건, 아래 상황을 모두 만족했을 경우입니다.

* 문서가 로드되어 Element를 사용할 수 있게 되었을 경우
* `lve.loadAsset` 함수를 사용하여 모든 에셋이 로드되었을 경우

정상적인 플레이가 가능한 상태가 된다면, 매개변수 `callback` 함수가 호출됩니다.

```
lve.loadAsset([

  'https://...',
  'https://...',

]).ready(() => {

  console.log('문서와 에셋이 모두 로드되었습니다.')

})
```

---

> return : `lve`