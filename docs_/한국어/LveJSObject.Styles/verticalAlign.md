# verticalAlign : `String`

객체의 `y`좌표의 기준점을 설정합니다. 사용할 수 있는 값은 `top`, `middle`, `bottom` 입니다.

객체의 `y`좌표는 `style.bottom` 속성을 기준으로 설정됩니다.  
각 값의 좌표 기준점은 아래를 참고하십시오.

### `top`

객체의 `y`좌표를 기준으로 위쪽으로 객체가 그려집니다.

### `middle`

객체의 `y`좌표를 기준으로 중앙에 객체가 그려집니다.

### `bottom`

객체의 `y`좌표를 기준으로 아래쪽으로 객체가 그려집니다.

또한 `style.verticalAlign` 속성은 객체의 `style.rotate` 속성에 영향을 줍니다.  
객체를 회전하였을 때, 회전의 기준점 역시 `style.verticalAlign`를 기준으로 회전합니다.