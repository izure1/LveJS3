# LveJS.getAssetData(url)

> url : `String`  
  에셋의 원본 url 입니다.

---

`lve.loadAsset` 함수로 불러온 에셋 객체를 가져옵니다.  

```
const imageSrc = 'https://sample.png'

lve.loadAssetData(imageSrc).ready(() => {

  const blob = lve.getAssetData(imageSrc)
  console.log(blob)

})
```

이렇게 불러온 에셋 객체는 `lve.loadAsset` 함수로 불러올 수 있습니다.

가령 새로운 `LveJS` 월드를 생성했을 때, 이전 월드에서 불러왔던 에셋 정보를 사용하고 싶을 때가 있을 겁니다. 아래와 같이 사용하면, 에셋을 다시 로드하지 않도록 도와줍니다.


```
let loadedAssets = lve.getAssetData()
let newWorld = new LveJS // 새로운 LveJS 월드를 만듭니다
newWorld.loadAsset(loadedAllAssets) // 이전 월드에서 불러왔던 에셋 정보를 상속받습니다.
```

---

> return : `LveJSAsset`  
  lve.loadAsset 함수로 만들어진 에셋 객체입니다.