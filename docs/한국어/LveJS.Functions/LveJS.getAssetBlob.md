# LveJS.getAssetBlob(url)

> url : `String` | `null`  
  에셋의 원본 url 입니다.

---

`lve.loadAsset` 함수로 불러온 에셋의 `blob`을 가져옵니다. `url` 매개변수를 입력하지 않으면 모든 에셋 객체 경로를 반환합니다.  

```
const imageSrc = 'https://sample.png'

lve.loadAsset(imageSrc).ready(() => {

  const blob = lve.getAssetBlob(imageSrc)
  console.log(blob.arrayBuffer())

})
```

---

> return : `Blob`  
  lve.loadAsset 함수로 불러온 에셋의 `blob` 입니다.