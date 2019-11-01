# LveJS.setGravity(x, y)

> x : `Number`  
  x좌표로 작용하는 중력가속도 값입니다.

> y : `Number`  
  y좌표로 작용하는 중력가속도 값입니다.

---

현재 LveJS 월드의 중력을 수정합니다.  

LveJS에서 지구와 같은 중력을 구현하기 위해서는 `y` 매개변수를 지구의 중력가속도인 `-9.8`로 기입하십시오. 아래와 같습니다.

```
const GRAVITY_EARTH = 9.8
const GRAVITY_MOON = GRAVITY_EARTH / 6


// 지구와 동일한 중력을 적용하기
lve.setGravity(0, -GRAVITY_EARTH)

// 달의 중력을 적용하기
lve.setGravity(0, -GRAVITY_MOON)
```

---

> return : `lve`