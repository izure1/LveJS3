# LveJS.getRenderStates()

객체를 렌더링하기 위한 정보를 담고 있습니다.  
반환값은 Object이며, `ready`, `value` 값을 가지고 있습니다.

만일 `lve.init` 함수로 LveJS 월드가 렌더링을 시작했다면, `ready`값은 `true`가 반환될 것입니다. 그리고 `value`는 객체를 그릴 때 사용하는 `LveJSObject.prototype.draw` 메서드의 매개변수를 반환합니다.

객체의 `LveJSObject.prototype.draw` 메서드는 `renderer`에서 자동으로 호출합니다. 따라서 일반적으로 이 함수는 사용할 필요가 없습니다. 하지만 `lve.createObject` 함수로 생성한 객체를 화면에 그려넣기 위해서는 수동으로 호출해주어야 하는데, 이 때 사용될 수 있습니다.

아래 예제를 확인하십시오.

```
const customObj = lve.createObject('myObject', { type: 'square' })


// 매 프레임이 끝날 때 마다 그리기를 시도합니다
lve.extendDrawEnd(interval => {

  const status = lve.getRenderStatus()

  // 캔버스가 준비되었을 경우에만 그리기를 시도합니다
  if (status.ready) {

    customObj.forceUpdate(interval)
    customObj.draw(...status.value)

  }

})
```

---

> return : `Object` { ready, value }