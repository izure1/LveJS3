# LveJS.getAssetBlob(url)

> url : `String`  
  에셋의 원본 url 입니다.

---

`lve.loadAsset` 함수로 불러온 에셋의 `blob`을 가져옵니다.  

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