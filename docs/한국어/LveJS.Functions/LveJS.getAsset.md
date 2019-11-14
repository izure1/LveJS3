# LveJS.getAsset(url)

> url : `String`  
  에셋의 원본 url 입니다.

---

`lve.loadAsset` 함수로 불러온 에셋의 `blob url`을 가져옵니다.  
`lveJSObject` 객체의 `src` 속성을 변경할 시, 이 함수를 자동으로 호출하여 로드된 `src`를 사용합니다. 따라서 일반적으로 사용할 필요는 없습니다.

```
const imageSrc = 'https://sample.png'

lve.loadAsset(imageSrc).ready(() => {

  const convertedSrc = lve.getAsset(imageSrc)

  console.log(convertedSrc)

})
```

---

> return : `String`  
  lve.loadAsset 함수로 변환된 `blob url` 입니다.