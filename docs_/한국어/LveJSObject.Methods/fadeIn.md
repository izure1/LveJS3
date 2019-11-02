# fadeIn([duration] [, ease])

> duration : `Number`  
  페이드가 진행될 시간입니다. 기본값은 `400`입니다.

> ease : `String`
  가속도를 지정합니다. 기본값은 `linear`입니다.

---

객체를 페이드인합니다.

객체의 `style.display` 속성값이 `none`일 경우에 천천히 페이드인됩니다.  
페이드는 `style.opacity` 속성을 사용하지 않습니다. 따라서, `style.opacity`가 `0`일 경우에는 `fadeIn` 메서드를 이용해도 보여지지 않습니다.

만일 가속도를 추가하고 싶다면, `ease` 매개변수를 이용하세요.  
사용할 수 있는 가속도 목록은 [https://easings.net](https://easings.net/) 사이트를 참고하십시오.

---

> return : `LveJSObjectSession` | `LveJSObject`