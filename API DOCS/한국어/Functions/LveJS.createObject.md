# LveJS.createObject(name, option)

> name : `String`  
  객체의 이름입니다. 중복될 수 있습니다.

> option : `Object`  
  객체의 초기 attribute 속성입니다.

---

새로운 객체를 반환합니다. `lve(name).create(option)` 과는 다릅니다.

`lve(name).create(option)` 은 객체를 생성하고, 월드에 등록되어 화면에 보여집니다.  
하지만 이 함수로 생성된 객체는 월드에 삽입되지 않습니다. 따라서 객체의 이름은 중복되어도 상관없습니다.

하지만 이 함수로 객체를 생성하여도 화면에 보여지지 않습니다.  
만일 화면에 보여주고 싶다면 아래와 같이 추가 작업을 해야합니다.

```
const obj = lve.createObject('objectName', {
  type: 'image',
  src: './sample.png'
})


// 매 프레임이 시작될 때 마다 화면에 객체를 그립니다
lve.extendDrawStart(interval => {

  // physics, renderer, animate를 포함한 객체 내부 정보를 모두 업데이트합니다.
  obj.forceUpdate(interval)

  // 현재 렌더링 상태을 매개변수로 넘겨 화면에 그려넣습니다.
  obj.draw(...lve.getRenderStates().value)

})


// 만일 더 이상 사용하지 않을 경우, 메모리 누수 방지를 위해 제거해야 합니다.
obj.remove()
```

---

> return : `LveJSObject`