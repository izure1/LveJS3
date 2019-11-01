# zIndex : `Number`

객체의 깊이를 지정합니다. 값이 높을수록 위로 보여집니다.

`style.perspective` 속성과 다른점은, 동일한 `style.perspective` 속성값을 가진 객체들 사이에서의 우선순위를 지정한다는 점이 다닙니다.

`style.zIndex` 속성값이 높더라도, `style.perspective` 속성값으로 인해 `z`좌표가 높다면 위로 보이지 않습니다.