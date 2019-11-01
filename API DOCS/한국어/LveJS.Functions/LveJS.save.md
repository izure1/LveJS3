# LveJS.save()

현재 월드의 상황을 저장합니다.

이는 물리 상태, 객체 여부를 모두 포함하여 저장됩니다.  
하지만 일부 몇 가지 상황과 객체는 저장되지 않습니다. 대표적으로 아래와 같습니다.

* `LveJSObjectSession.prototype.fadeIn`, `LveJSObjectSession.prototype.fadeOut`, `LveJSObjectSession.prototype.transition` 메서드를 이용하여 진행 중인 페이드 상황
* `particle` 객체에서 나온 파티클 파편들

위 상황과 객체는 세이브에 중요하다고 생각되지 않기 때문에 생략됩니다.  
게임 내에서 저장하고 싶은 상황이 있을 경우, `lve.save` 함수를 이용하여 손쉽게 관리할 수 있습니다.  
복구하기 위해선 `lve.restore` 함수를 이용하십시오.

```
// 현재 상황을 저장하기
const savedata = lve.save()

// 저장되었던 상황을 복구하기
lve.restore(savedata)
```

---

> return : `Object` { camera, renderer, physics, objects }