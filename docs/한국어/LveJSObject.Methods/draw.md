# draw(renderStates)

> renderStates : `Arguments`  
  렌더링에 필요한 매개변수들입니다. `lve.getRenderStates` 함수를 이용하여 얻을 수 있습니다.

---

화면에 객체를 그려넣습니다.

일반적으로 `create` 메서드로 생성된 객체는 자동으로 `renderer` 시스템에서 화면에 그려줍니다. 따라서 이 메서드를 사용할 일은 없습니다. 하지만 `lve.createObject` 함수로 객체를 생성할 경우, 이 객체는 `renderer` 시스템이 감지하지 못하기 때문에, 사용자가 월드에 직접 그려주어야 합니다. 이 메서드는 그 때 사용됩니다.

자세한 내용은 [`lve.createObject`](../LveJS.Functions/LveJS.createObject.md) 함수 문서를 참고하십시오.

---

> return : `LveJSObjectSession` | `LveJSObject`