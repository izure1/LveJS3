# LveJS.calc(left, bottom, perspective [, style] [, camera])

> left : `Number`  
  객체가 보여지고 싶은 x좌표

> bottom : `Number`  
  객체가 보여지고 싶은 y좌표

> perspective : `Number`
  객체에 지정하고 싶은 z좌표

> style : `Object`  
  객체에 지정하고 싶은 CSS 스타일

> camera : `LveJSObjectSession` | `LveJSObject`  
  이 매개변수로 넘어온 카메라가 보고 있는 화면을 기준으로 작업합니다.  
  기본값은 `lve.current.camera`입니다.

---

특정 카메라가 바라보고 있는 화면을 기준으로, 원하는 위치와 모양의 객체를 생성할 수 있도록 도와줍니다.  

3D 월드에서 특정 위치에 원하는 크기로 객체를 보여주기란 힘든 일입니다.  
z좌표의 거리에 따라, 크기와 x, y 값도 달라지기 때문입니다.

```LveJS.calc``` 함수는 그러한 문제점을 해결해주기 위한 함수입니다.
이 함수의 `left`, `bottom`, `perspective` 매개변수로 생성할 객체의 x, y, z값을 넣고, `option` 매개변수로 원하는 모양새를 넣습니다.

반환값은 계산된 객체의 스타일 값입니다.

```
// 내가 보여주고 싶은 스타일 값입니다
const squareLooks = {
  width: 100,
  height: 200,
  color: 'red'
}


// 'yourCamera' 카메라 객체가 보고 있는 화면을 기준으로 보일 스타일 값을 얻습니다
const style = lve.calc(100, 200, 300, squareLooks, lve('yourCamera'))


// 이 객체는 'squareLooks' 에서 지정한 모양으로 보입니다
// 위치는 화면좌측하단을 기준으로 x=100, y=200, z=300 에 생성될 것입니다.
lve('square').create({ type: 'square' }).css(style)
```
---

> return : `Object`  
  사용자가 입력한 계산된 CSS 값이 담긴 `Object` 객체입니다.