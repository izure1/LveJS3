# animate(properties [, duration] [, ease] [, attribute])

> properties : `Object`  
  변경할 속성들입니다.

> duration : `Number`  
  몇 초에 걸쳐서 변경될지 지정합니다. 기본값은 `0`입니다.

> ease : `String`  
  가속도를 지정합니다. 기본값은 `linear`입니다.

> attribute : `String`  
  객체에서 변경할 속성그룹을 지정합니다. 기본값은 `style`입니다.

---

객체의 속성을 `duration`에 걸쳐서 꾸준하게 변경합니다. 이는 애니메이션 효과를 주는데 유용합니다.  
가령 `style.left = 100`으로 `10`초에 걸쳐서 꾸준하게 이동하는 효과를 주고 싶다면, 아래와 같이 사용하세요.

```
lve('yourObject').animate({
  left: 100
}, 10 * 1000)
```

만일 가속도를 추가하고 싶다면, `ease` 매개변수를 이용하세요.  
사용할 수 있는 가속도 목록은 [https://easings.net](https://easings.net/) 사이트를 참고하십시오.

사용 예제는 아래와 같습니다.

```
lve('yourObject').animate({
  left: 100
}, 10 * 1000, 'easeOutExpo')
```

`LveJSObjectSession.prototype.animate` 메서드는 기본적으로 객체의 `style` 속성을 변경하도록 설계되었습니다. 하지만 원한다면, `style` 속성 외의 다른 속성도 변경할 수 있습니다. 가령 객체의 `videoset` 값을 변경하고 싶다면 `attribute` 매개변수를 이용하여 아래와 같이 사용하십시오.

```
lve('yourObject').animate({
  volume: 1
}, 1000, 'linear', 'videoset')
```

---

# animate(property, value [, duration] [, ease] [, attribute])

> property : `String`  
  변경할 속성명입니다.

> value : `Number`  
  변경할 값입니다.

---

또 다른 사용 방법이 있습니다.  
가령 `style.left` 속성 한 가지만 변경하는데, 너무 거창하다 싶으면 아래와 같이 사용하십시오.

```
// style.left 속성값을 100으로 10초에 걸쳐 변경합니다.
lve('yourObject').animate('left', 100, 10 * 1000)
```

---

> return : `LveJSObjectSession` | `LveJSObject`