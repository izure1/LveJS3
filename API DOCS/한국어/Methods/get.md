# get(index)

> index : `Number`  
  찾고 싶은 객체의 인덱스 값을 입력합니다. 기본값은 `0`입니다.

---

한 예제를 보여드리겠습니다.

```
lve('*')
```

위 예제는, 현재 월드에 생성된 모든 객체를 선택하는 것입니다.
콘솔에서 위 내용을 출력하면, 다음과 같은 구조로 되어 있습니다.

```
LveJSObjectSession {

  name: '*',
  context: [
    LveJSObject,
    LveJSObject,
    LveJSObject,
    ...
  ]

}
```

요컨데 검색된 모든 객체는 `LveJSObjectSession.context` 속성에 배열 안에 담겨져 있다는 의미입니다. 따라서 여러분이 첫 번째 요소를 얻어오기 위해선 다음과 같은 시도를 할 수 있겠습니다.

```
lve('*').context[0]
```

맨 뒤에 있는 요소를 얻어오기 위해선 어떻게 해야할까요?

```
const session = lve('*')

session.context[session.length - 1]
```

네, 물론 이렇게 해결할 수도 있습니다.  
하지만 `get` 메서드는 좀 더 간단히 해결할 수 있습니다.

```
// 맨 첫 번째 요소를 얻기
lve('*').get(0)

// 맨 마지막 요소를 얻기
lve('*').get(-1)
```

---

> return : `LveJSObject`