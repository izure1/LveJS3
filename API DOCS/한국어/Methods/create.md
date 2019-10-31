# create(attributes)

> attributes : `Object`  
  객체의 초기값입니다.

---

객체를 생성하는 메서드입니다. 이 메서드로 객체를 생성할 경우, 객체는 `renderer` 시스템에 자동으로 등록되어, 화면에 출력됩니다.

`type` 속성은 필수로 입력해야 하며, 입력할 수 있는 값은 다음과 같습니다.

> `camera`  
  카메라입니다. 카메라 객체는 `style.perspective`가 변경되어도, `lve.requestCaching` 함수가 실행되지 않아 성능이 좋습니다.

> `image`  
  이미지입니다. 이미지를 화면에 보여주며, 추가로 이미지의 주소값인 `src` 속성이 필요합니다.

> `sprite`  
  스프라이트 이미지입니다. 움직이는 이미지를 화면에 보여주며, 추가로 이미지의 주소값인 `src` 속성이 필요합니다.

> `video`  
  비디오입니다. 비디오를 화면에 보여주며, 추가로 비디오의 주소값인 `src` 속성이 필요합니다.

> `particle`  
  파티클입니다. 화면에 입자를 주기적으로 생성하는 `particleEmitter`를 생성합니다. 추가로 보여줄 입자의 이미지 주소값인 `src` 속성이 필요합니다.

> `square`  
  사각형입니다. 화면에 사각형을 보여줍니다.

> `circle`  
  원형입니다. 화면에 원형을 보여줍니다.

> `text`  
  텍스트입니다. 화면에 글자를 보여주며, 추가로 글자 내용을 담은 `text` 속성이 필요합니다.

아래는 텍스트 객체를 생성하는 간단한 예제입니다.

```
lve('textObject').create({ type: 'text', text: 'Hello, World!' })
```

생성된 객체를 변수에 담을 수 있습니다.  
아래 예제를 확인하십시오.

```
const obj = lve('yourObject').create({ type: 'square' })

// or 

lve('yourObject').create({ type: 'square' })

const obj = lve('yourObject')
```

---

> return : `LveJSObject`