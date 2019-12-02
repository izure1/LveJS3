# LveJS.destroyAsset(url)

> url : `String` | `null`  
  에셋의 원본 url 입니다.

---

`lve.loadAsset` 함수로 불러온 에셋를 파괴합니다. `url` 매개변수를 입력하지 않으면 모든 에셋를 파괴합니다. 더 이상 필요하지 않은 에셋을 파괴하여 메모리 누수를 해결하십시오.

```
const imageSrc = 'https://sample.png'

lve.destroyAsset(imageSrc)
```

---

> return : `lve`  