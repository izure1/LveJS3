# LveJS.createSprite(name, src, options)

> name : `String`  
  스프라이트의 이름입니다. 객체의 sprite 메서드에서 사용할 이름입니다.

> src : `String`  
  스프라이트 에셋의 주소입니다.

> options : `Object`  
  스프라이트 정보입니다.

---

스프라이트 객체에서 사용할 스프라이트 모션 정보를 생성합니다. 생성된 정보는 LveJS 월드에 저장되며, 반환된 값에서 `destroy` 메서드를 호출하여 제거할 수 있습니다.

`options` 매개변수에서 사용할 수 있는 값은 아래와 같습니다.

> options.frame : `Number`  
  스프라이트 에셋에 있는 전체 모션의 갯수를 지정합니다.

> options.fps : `Number`  
  스프라이트가 초당 재생될 모션의 개수를 지정합니다.  
  기본값은 `options.frame`입니다.

> options.start : `Number`  
  이 스프라이트 모션의 첫 프레임 위치입니다.  
  한 스프라이트 에셋에는 많은 모션 프레임이 담겨있을 수 있으므로, `options.start`, `options.end` 값으로 모션의 범위를 지정할 수 있습니다.

> options.end : `Number`  
  이 스프라이트 모션의 마지막 프레임 위치입니다.

아래 예시를 확인하십시오.

```
// walk-right 라는 이름의 스프라이트 모션 정보를 생성합니다.
const sprite_i = lve.createSprite('walk-right', 'https://sprite.png', {

  frame: 10,
  fps: 20,
  start: 0,
  end: 5,

})

// sprite 객체에서 walk-right 모션을 재생합니다.
lve('sprite').create({ type: 'sprite' }).sprite('walk-right').play()
```

---

return : `LveJSSprite`