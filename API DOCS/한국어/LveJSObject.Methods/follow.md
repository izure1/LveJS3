# follow(name, relativeGap)

> name : `LveJSObjectSession` | `LveJSObject` | `String`  
  따라다닐 객체입니다.

> relativeGap : `Object` { left, bottom, perspective }  
  이 정도 거리를 벌리고 따라다닙니다. 기본값은 각각 `0`입니다.

---

게임을 만들다보면 `A`라는 객체를 `B`라는 객체가 따라다니게 만들고 싶은 경우가 있습니다. 2D 게임을 기준으로 설명해보자면, 주인공 객체를 카메라가 따라다니며 비춥니다.

이 경우 사용하는 것이 `follow` 메서드입니다.  
아래 예제와 같이 사용할 수 있을 것입니다.

```
// camera 객체가 player 객체를 z좌표 -100만큼 거리를 벌리고 따라다닙니다.
// 가령 player.style.perspective 값이 200일 경우, camera.style.perspective 값은 100이 됩니다.
lve('camera').follow('player', { perspective: -100 })
```

만일 이 상태에서 relativeGap.left를 추가로 준다면 어떻게 될까요?

```
// 이미 perspective 값은 -100인 상태이므로, 추가로 left: -100이 됩니다.
lve('camera').follow('player', { left: -100 })
```

이렇듯 `follow` 메서드는 `relativeGap`에서 속성을 명시적으로 지정하지 않는다면, 이전에 지정된 값을 그대로 물려받습니다.

`follow` 메서드를 이용하여, 동시에 여러 객체를 따라다닐 수 없습니다.  
만일 이전에 `A`라는 객체를 따라다녔지만, 새롭게 `B`라는 객체를 따라다니게 한다면, *기존 `A`객체를 더이상 추적하지 않습니다.*

---

# follow(property)

> property : `String`  
  지정된 `relativeGap` 속성에서 얻어올 값입니다. 사용할 수 있는 값은 다음과 같습니다.  
  left, bottom, perspective

---

만일 현재 지정된 `relativeGap` 속성값을 알고 싶다면, 아래와 같이 사용하십시오.

```
const relativeLeft = lve('followingObject').follow('left')
```

---

> return : `LveJSObjectSession` | `LveJSObject`