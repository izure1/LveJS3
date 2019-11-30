# LveJS.setBaseURL(url)

> url : `String`  
  에셋의 기본 URL 주소입니다.

---

`lve.loadAsset`, `lve.getAsset`, `lve.getAssetBlob` 등의 함수에서 에셋을 불러올 때, 사용할 기본 URL 주소를 지정합니다.  
지정한 URL 주소는, 이후에 사용될 모든 에셋 주소에 접두됩니다.  

가령 대부분의 에셋이 `/image/asset/` 폴더에 있다고 가정할 경우, 당신은 아래와 같이 사용할 수 있습니다.

```
const baseURL = '/image/asset/'

lve.setBaseURL(baseURL)
lve.loadAsset([
  'charaterA.png',
  'charaterB.png',
  'charaterC.png',
]).ready(() => {

  // setBaseURL 함수를 이용하여 /image/asset 폴더에 있는 에셋들을 파일명만 지정하여 불러올 수 있습니다.

  console.log(lve.getAsset('characterA.png'))

})
```

---

> return : `lve`