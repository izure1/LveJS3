# LveJS.capture([camera] [, option])

> camera : `String` | `LveJSObjectSession` | `LveJSObject`  
> option : Object {
    type : 'image/png',
    quality: 0.92,
    scale: 1
  }

---

특정 카메라가 보고 있는 화면을 캡쳐하여 `base64` 문자열로 반환합니다.

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