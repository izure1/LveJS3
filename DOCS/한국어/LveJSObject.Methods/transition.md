# transition(src [, duration] [, ease])

> src : `String`  
  변경할 이미지 경로입니다.

> duration : `Number`  
  몇 초에 걸쳐서 변경될지 지정합니다. 기본값은 `0`입니다.

> ease : `String`  
  가속도를 지정합니다. 기본값은 `linear`입니다.

---

`image` 객체의 모양을 부드럽게 변경합니다.  
`src` 매개변수의 이미지 에셋으로 부드럽게 페이드하여 변경하도록 보여줍니다.  
예시는 아래와 같습니다.

```
// 객체를 클릭했을 경우
lve('yourObject').create({ type: 'image', src: 'sampleA.png' }).on('click', function () {

  // 1초에 걸쳐 이미지를 sampleA.png 에서 sampleB.png 으로 페이드합니다.
  this.transition('sampleB.png', 1000)

})
```

이 기능은 비주얼노벨에서 주인공의 이미지를 변경할 때 사용하면 유용합니다.

---

# transition(src [, speed])

> src : `String`  
  변경할 소스입니다. 이미지 객체일 경우 에셋의 경로, 텍스트 객체일 경우 변경할 문자열입니다.

> speed : `Number`  
  한 글자가 타이핑되는 속도입니다. 기본값은 `0`입니다.

---

`text` 객체의 문자열을 부드럽게 타이핑하듯이 출력하고 싶을 때도 같은 방식으로 사용합니다.  
`text` 객체에서 사용할 경우, `ease` 매개변수는 지원되지 않습니다.  
`speed` 매개변수는 타이핑되는 속도를 조정할 수 있습니다. 가령 `35`을 기입하면, 한 글자를 타이핑하는데 `35ms`의 시간이 걸립니다.

아래 예제를 참고하십시오.

```
// 35ms의 속도로 글자를 타이핑 효과로 출력합니다.
lve('yourObject').transition('Hello, World!', 35)
```

이 기능은 비주얼노벨에서 대사의 출력에 유용합니다.

---

> return : `LveJSObjectSession` | `LveJSObject`