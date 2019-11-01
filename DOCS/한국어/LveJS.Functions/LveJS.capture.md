# LveJS.capture([camera] [, option])

> camera : `String` | `LveJSObjectSession` | `LveJSObject`  
  이 카메라가 보고 있는 화면을 캡쳐합니다.  
  기본값은 `lve.current.camera`입니다.

> option : `Object`  
  캡쳐할 이미지의 설정을 합니다.

---

특정 카메라가 보고 있는 화면을 캡쳐하여 `base64` 문자열로 반환합니다.

`option` 매개변수를 이용하여 이미지의 설정을 할 수 있습니다.  
아래와 같은 속성을 이용합니다.

> option.type : `String`  
  이미지의 `MIME` 타입을 설정합니다. 기본값은 `image/png`입니다.

> option.quality : `Number`  
  이미지의 품질을 설정합니다. `0~1`의 값을 입력합니다.  
  기본값은 `0.92`입니다.

> option.scale : `Number`  
  이미지의 크기 비율을 설정합니다. `0~1`의 값을 입력합니다.
  기본값은 `1`입니다.

```
// 현재 카메라가 보고 있는 화면을 캡쳐합니다
lve.capature()

// or
lve.capture('yourCamera', {
  type: 'image/webp',
  quality: 1,
  scale: 0.5
})
```

---

> return : `String`  
  `base64로` 변환된 화면 이미지입니다.