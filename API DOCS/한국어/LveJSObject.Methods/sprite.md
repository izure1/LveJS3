# sprite(options)

> options : `Object` { stage, fps, current }

---

`sprite` 타입의 객체에 스프라이트 설정을 합니다.  
사용할 수 있는 옵션은 다음과 같습니다.

> options.stage : `Number`  
  객체의 `src` 이미지 에셋에 몇 개의 모션이 들어있는지를 입력합니다.  
  기본값은 `1`입니다.

> options.fps : `Number`  
  스프라이트의 초당 재생 속도입니다. `1`초에 재생될 모션의 갯수를 입력합니다.  
  가령 `options.stage` 속성값이 `10`이고, `1`초만에 전부 재생하고 싶다면 `10`으로 입력하십시오.  
  기본값은 `1`입니다.

> options.current : `Number`  
  현재 스프라이트가 재생되고 있는 모션의 인덱스입니다.  
  기본값은 `0`입니다.

예시는 아래를 참고하십시오.

```
lve('spriteObject').sprite({
  fps: 12
})
```

---

# sprite(option, value)

> option : `String`  
  변경할 스프라이트 속성명입니다.

> value : `String` | `Number`  
  변경할 값입니다.

---

1개의 스프라이트 속성만을 변경할 것이라면, 단축형으로 사용할 수 있습니다.  
아래 예제를 참고하십시오.

```
lve('yourObject').sprite('fps', 12)
```

---

# sprite(option)

> option : `String`  
  값을 받아올 객체의 스프라이트 속성명입니다.

---

객체의 스프라이트 속성값을 받아오고 싶다면 아래와 같이 사용하십시오.  
만일 `LveJSObjectSession`에 2가지 이상의 객체가 담겨 있을 경우, 첫 번째 객체의 값이 반환됩니다.

```
const fps = lve('yourObject').sprite('fps')
```

---

> return : `LveJSObjectSession` | `LveJSObject`
