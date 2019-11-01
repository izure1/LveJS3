# LveJS.createCollider(classA [, classB] [, callback])

> classA : `String`  
  충돌을 감지할 객체A의 클래스 이름입니다.

> classB : `String`  
  충돌을 감지할 객체B의 클래스 이름입니다.

> callback : `Function`  
  이 객체들이 충돌할 때 발생할 콜백 함수입니다.

---

classA와 classB를 가지고 있는 객체들 사이에 충돌을 만듭니다.

모든 객체는 `physics` 속성을 이용해 물리 효과를 얻을 수 있습니다.  
하지만 충돌기 없이는 중력의 영향만 받을 뿐, 어떠한 객체들 사이에도 충돌하지 않을 것입니다.  

`lve.createCollider` 함수는 해당 클래스를 가진 객체들 사이에 충돌을 만들어줍니다.

```
const classA = 'squareA'
const classB = 'squareB'

lve('square_1').addClass('classA')
lve('square_2').addClass('classB')

// 위 두 객체를 충돌시킵니다.
const colliderA = lve.createCollider('classA', 'classB')


// or

// classA를 가진 객체들끼리만 서로 충돌하게 만들 수도 있습니다.
const colliderB = lve.createCollider('classA')


// 충돌기를 더 이상 작동하고 싶지 않다면...
colliderA.destroy()
colliderB.destroy()
```

---

> return : `LveJSCollider`  
  `destroy` 메서드를 이용하여 이 충돌기를 파괴할 수 있습니다.