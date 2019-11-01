# forceUpdate(deltaTime)

> deltaTime : `Number`  
  게임의 프레임 업데이트 사이의 시간입니다.

---

현재 객체의 애니메이션 효과, 물리 효과 정보를 업데이트합니다.

`deltaTime` 매개변수는, 프레임과 프레임 사이의 흘렀던 시간입니다.

`create` 메서드로 생성된 객체는 `renderer` 시스템에서 매 프레임마다 이 메서드를 자동적으로 호출됩니다. 따라서 일반적으로 사용할 일은 없습니다. 하지만 `lve.createObject` 함수로 생성된 객체는 `renderer` 시스템에서 호출되지 않기 때문에, 사용자가 직접 호출해주어야 합니다.

아래 예제를 참고하십시오.

```
const obj = lve.createObject('yourObject', { type: 'image' })

lve.extendEnd(deltaTime => {

  // 매 프레임마다 객체의 정보를 업데이트합니다.
  obj.forceUpdate(deltaTime)

})
```

---

> return : `LveJSObjectSession` | `LveJSObject`