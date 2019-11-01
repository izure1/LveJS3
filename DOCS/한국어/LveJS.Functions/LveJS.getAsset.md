# LveJS.getAsset(url)

> url : `String`  
  에셋의 원본 url 입니다.

---

`lve.loadAsset` 함수로 불러온 에셋의 `blob url`을 가져옵니다.

```
const imageSrc = 'https://sample.png'

lve.loadAsset(imageSrc).ready(() => {

  const convertedSrc = lve.getAsset(imageSrc)

  lve('image').load(convertedSrc)

})
```

---

> return : `String`  
  lve.loadAsset 함수로 변환된 `blob url` 입니다.