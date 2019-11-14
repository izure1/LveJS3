# particle(options)

> options : `Object` { duration, interval, speed, start, end, blendMode, rangeX, rangeY, rangeZ }

---

`particle` 타입의 객체에 파티클 설정을 합니다.  
사용할 수 있는 옵션은 다음과 같습니다.

> options.duration : `Number`  
  생성된 입자의 생존시간입니다. 이 시간만큼 지나면 입자가 사라집니다.  
  기본값은 `1000`입니다.

> options.interval : `Number`  
  입자의 생성 주기입니다. 이 시간이 지날 때 마다 입자가 생성됩니다.  
  기본값은 `200`입니다.

> options.speed : `Number`  
  생겨난 입자의 튕김 속도입니다. 이 속도가 높을 수록 입자가 멀리, 그리고 빠르게 튕깁니다.  
  기본값은 `300`입니다.

> options.start : `Number`  
  생성된 입자의 최초 크기(`style.scale`)입니다.  
  기본값은 `1`입니다.

> options.end : `Number`  
  입자는 생성되고 `options.duration` 속성값만큼 시간이 지나면 사라집니다.  
  그리고 사라지기전까지 `options.end` 속성으로 지정한 값까지 크기가 줄어듭니다.  
  기본값은 `0`입니다.

> options.blendMode : `String`  
  입자의 블렌드 모드를 설정합니다.  
  기본값은 `source-over`입니다. 사용할 수 있는 값은 [`style.blendMode`](../LveJSObject.Styles/blendMode.md) 문서를 참고하십시오.

> options.rangeX : `Number`  
  이 범위만큼 `파티클` 객체에서 x좌표로 넓게 퍼져 랜덤하게 생성됩니다.  
  기본값은 `0`입니다.

> options.rangeY : `Number`  
  이 범위만큼 `파티클` 객체에서 y좌표로 넓게 퍼져 랜덤하게 생성됩니다.  
  기본값은 `0`입니다.

> options.rangeZ : `Number`  
  이 범위만큼 `파티클` 객체에서 z좌표로 넓게 퍼져 랜덤하게 생성됩니다.  
  기본값은 `0`입니다.

> options.gravityScale : `Number`  
  입자의 중력 비율을 설정합니다. `±n`의 값을 지정할 수 있습니다.  
  만일 입자가 중력의 영향을 받고 싶지 않다면, 이 값을 `0`으로 기입하십시오.  
  중력을 역전하고 싶다면, 음수를 기입하십시오.  
  기본값은 `1`입니다.

> options.fixedRotation : `Boolean`  
  입자의 회전 여부를 설정합니다.

> options.density : `Number`  
  입자의 밀도를 설정합니다. 자연스러운 퍼짐을 위해서는 건드리지 않아도 됩니다.  기본값은 `0`입니다.

> options.friction : `Number`  
  입자의 마찰력을 설정합니다. 자연스러운 퍼짐을 위해서는 건드리지 않아도 됩니다.  
  기본값은 `0.25`입니다.

> options.restitution : `Number`  
  입자의 탄성력을 설정합니다. 자연스러운 퍼짐을 위해서는 건드리지 않아도 됩니다.  
  기본값은 `0.5`입니다.

예시는 아래를 참고하십시오.

```
lve('particleObject').particle({
  blendMode: 'lighter'
})
```

---

# particle(option, value)

> option : `String`  
  변경할 파티클 속성명입니다.

> value : `String` | `Number`  
  변경할 값입니다.

---

1개의 파티클 속성만을 변경할 것이라면, 단축형으로 사용할 수 있습니다.  
아래 예제를 참고하십시오.

```
lve('yourObject').particle('blendMode', 'lighter')
```

---

# particle(option)

> option : `String`  
  값을 받아올 객체의 파티클 속성명입니다.

---

객체의 파티클 속성값을 받아오고 싶다면 아래와 같이 사용하십시오.  
만일 `LveJSObjectSession`에 2가지 이상의 객체가 담겨 있을 경우, 첫 번째 객체의 값이 반환됩니다.

```
const blendMode = lve('yourObject').particle('blendMode')
```

---

> return : `LveJSObjectSession` | `LveJSObject`
