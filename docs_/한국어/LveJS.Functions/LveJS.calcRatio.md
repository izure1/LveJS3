# LveJS.calcRatio(parentWidth, parentHeight, width, height, scale)

> parentWidth : `Number`  
  보여줄 객체의 최대 가로 크기입니다.  

> parentHeight : `Number`  
  보여줄 객체의 최대 세로 크기입니다.

> width : `Number`  
  보여줄 객체의 가로 크기입니다.

> height : `Number`  
  보여줄 객체의 세로 크기입니다.

> scale : `Number`  
  이 객체가 `parentWidth`, `parentHeight의` 크기에 맞추어 보여줄 사이즈 비율입니다.  
  `0~1` 사이의 값을 갖습니다.

---

해상비를 계산해줍니다.  

가령 캔버스의 크기가 600 x 480이고, 비디오의 크기가 1600 x 900 이라고 가정합시다.  
이 비디오의 해상비를 건드리지 않고, 어떻게 전체화면으로 보여줄 수 있을까요?  
비디오의 가로, 세로 크기를 어떻게 계산해야 할까요?  

`LveJS.calcRatio` 함수는 해상비를 건드리지 않고, 이것을 계산할 수 있도록 도와줍니다.

```
// 600 x 800 사이즈에 1600 x 900 사이즈의 객체를 최대비율(1)로 계산하여 보여줍니다.
const {
  width,
  height
} = lve.calcRatio(600, 480, 1600, 900, 1)

// 이 비디오 객체는 계산된 { width: 600, height: 337.5 } 의 스타일을 가지게 됩니다.
lve('video').css({ width, height })
```

---

> return : `Object` { width, height }