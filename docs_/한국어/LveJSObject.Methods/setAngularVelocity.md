# setAngularVelocity(velocity)

> velocity : `Number`  
  음수는 시계방향으로, 양수는 반대방향으로 회전합니다.

---

물리 객체에 `velocity` 매개변수의 값만큼 회전 속도를 줍니다.  
`applyAngularImpulse` 메서드와 다른 점은, 물리 객체에 물리적 힘을 가하는 것이 아닌, 속도를 부여한다는 점이 다릅니다.

현실 세계에서 가만히 있는 물체가 갑자기 속도를 가지는 경우는 없습니다. 따라서 이는 부자연스러운 기능입니다. 하지만 필요하다면 사용하십시오. 가령 매 프레임마다 특정 속도로 회전하는 객체를 구현해야 할 경우 유용합니다. 아래 예제를 확인하십시오.


```
lve.extendStart(() => {

  // 이 객체는 계속 500의 속도로 고정되어 회전합니다.
  lve('yourObject').setAngularVelocity(500)

})
```

---

> return : `LveJSObjectSession` | `LveJSObject`