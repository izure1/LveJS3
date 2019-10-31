# element()

`src` 속성을 이용하는 객체의 `HTMLElement` 객체를 반환합니다.

`image`, `video` 등 몇 객체는 `src` 속성을 이용하여 실제 `HTMLElement`를 생성하고 화면에 그려넣습니다. 그리고 LveJS에서는 이를 제어하는 `attribute` 속성을 이용하여 비디오의 현재 위치, 속도 등을 조절할 수 있는 메서드를 제공합니다.

하지만 때론, 더 큰 제어가 필요할 때가 있는데, 해당 메서드로 `HTMLElement` 원본을 가져와 직접 데이터를 조작할 수 있습니다.

아래 예제를 참고하십시오.

```
const element = lve('video').element()

// 비디오의 현재 재생 시각을 20초로 변경하기
element.currentTime = 20
```

---

> return : `HTMLImageElement` | `HTMLVideoElement`