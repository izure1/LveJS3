# LveJS.getMouseCoords(event [, reverse = true])

> event : `MouseEvent`  
  마우스 이벤트입니다.

> reverse : `Boolean`  
  y좌표를 반전시킵니다.

---

캔버스를 클릭하여 발생한 마우스 이벤트를 매개변수로 넘겨받아 좌표를 계산합니다.  
LveJS 캔버스의 비율(scale) 등을 고려하여 계산합니다. 

가령 `event.x = 100` 일 경우, 캔버스가 모종의 이유로 50% 축소된 상태일 경우, 반환되는 x는 50이 됩니다.

`lve.fullscreen()` 함수는 실제로 캔버스의 크기를 모니터의 최대 해상도로 수정합니다. 따라서 마우스 이벤트의 x, y 좌표를 그대로 사용해서는 안됩니다. 아래와 같이 사용하세요.

```
canvas.addEventListener('click', e => {

  const { x, y } = lve.getMouseCoord(e)

  console.log(x, y)

})
```

또한 일반적인 마우스 이벤트의 y좌표는 캔버스의 상단을 기준으로 시작하나, LveJS의 y좌표는 하단을 기준으로 시작합니다. 따라서 캔버스의 클릭한 위치를 LveJS의 월드 좌표 시스템으로 고치고 싶다면, `reverse` 매개변수를 사용하십시오. `reverse` 매개변수의 기본값은 `true`입니다.

---

> return : `Object` { x, y }