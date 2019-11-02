# fadeOut([duration] [, ease], [, delay])

> duration : `Number`  
  페이드가 진행될 시간입니다. 기본값은 `400`입니다.

> ease : `String`  
  가속도를 지정합니다. 기본값은 `linear`입니다.

> delay : `Number`  
  페이드가 진행되기전에 대기할 시간입니다. 기본값은 `0`입니다.  
  `0`이상의 값을 주면, 페이드아웃 후 이 객체는 삭제됩니다.

---

객체를 페이드아웃합니다.

객체의 `style.display` 속성값이 `block`일 경우에 천천히 페이드아웃됩니다.  
페이드는 `style.opacity` 속성을 사용하지 않습니다.

만일 가속도를 추가하고 싶다면, `ease` 매개변수를 이용하세요.  
사용할 수 있는 가속도 목록은 [https://easings.net](https://easings.net/) 사이트를 참고하십시오.

페이드아웃을 대기하는 시간이 필요할 때가 있을 겁니다.  
가령 파티클 효과를 주고 싶을 때, 파티클 입자를 생성하고 몇 초 후에 이를 삭제해야 합니다. 이런 경우에 사용하는 것이 `delay` 매개변수입니다.

아래 예제를 참고하십시오.

```
// 이 객체는 2초 대기한 후, 0.4초에 걸쳐 페이드아웃되고 삭제됩니다.
lve('yourObject').fadeOut(400, 'linear', 2000)
```

물론 가장 이상적인 방법은, `particle` 타입의 객체를 생성하는 것입니다.  
따라서 `delay` 매개변수는 필요한 경우에만 사용하십시오.

---

> return : `LveJSObjectSession` | `LveJSObject`
