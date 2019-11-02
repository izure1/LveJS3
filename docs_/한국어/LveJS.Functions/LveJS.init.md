# LveJS.init(setting)

> setting : `Object`  
  LveJS 렌더링 설정값입니다.

---

LveJS 월드의 전역 설정을 합니다. 일반적으로 맨 처음에 사용되는 함수입니다.  
`setting` 매개변수에 넣을 수 있는 속성값들은 아래와 같습니다.

> canvas : `String` | `HTMLCanvasElement`  
  LveJS 화면이 출력될 캔버스입니다. 셀렉터를 입력할 수 있습니다.

> width : `Number`  
  캔버스의 넓이를 지정합니다. 기본값은 `canvas.width`입니다.

> height : `Number`  
  캔버스의 높이를 지정합니다. 기본값은 `canvas.height`입니다.

> backgroundColor : `String`  
  캔버스의 배경색을 지정합니다. 기본값은 `transparent` 입니다.

> defaultCamera : `String` | `false`  
  캔버스가 작동할 수 있게 되었을 때, 기본 카메라 생성 여부를 지정합니다.  
  문자열을 기입하면, 해당 문자열의 이름을 가진 카메라 객체가 생성되어 월드를 보여줍니다.  
  사용하지 않으려면 `false` 을 기입하십시오. 기본값은 `camera` 입니다.

> maxSight : `Number` | `null`  
  최대 시야입니다. 객체와 현재 카메라 사이의 `style.perspective` 거리가 `maxSight`를 넘어간다면, 이 객체는 더 이상 보여지지 않습니다. 이 제한을 없애려면 `null`을 기입하십시오.  
  기본값은 `null`입니다.

> minSize : `Number`  
  보여줄 최소 크기입니다. 객체의 `style.width` 또는 `style.height` 가 `minSize`보다 작다면, 이 객체는 더 이상 보여지지 않습니다. 이 제한을 없애려면 `null`을 기입하십시오.  
  기본값은 `0.35`입니다.

> cacheLevel : `Number`  
  캐시 레벨입니다. 객체를 생성하거나, 객체의 `style.perspective`를 변경할 때 마다, *LveJS 월드는 모든 객체가 담긴 배열을 재정렬합니다.* 이 숫자가 높을수록 재정렬의 빈도를 줄어듭니다.  
  따라서 LveJS의 성능이 증가하지만, 그만큼 렌더링의 반응성이 느려집니다.  
  기본값은 `1`입니다.

`canvas` 속성은 필수이며, 이 값이 기입되기 전까지, **LveJS 월드는 동작하지 않습니다.**  
따라서 간단하게 사용하기 위해선 `canvas` 하나만 기입하면 충분합니다.

```
lve.init({ canvas: 'yourCanvasSelector' })
```

---

> return : `lve`