# filter(fn)

> fn : `Function`

---

검색된 객체 중, 조건에 맞는 객체만을 담아 반환합니다.

`fn` 매개변수로 넘어온 함수는 `this`로 각 객체 자신을 가르킵니다.  
또한 함수의 매개변수로 객체 자신이 넘어옵니다. 함수 실행 후 반환값이 `true`인 객체만을 얻어옵니다.

가령 월드에 존재하는 객체 중, density 속성이 1인 객체만 찾고 싶다면 아래와 같이 사용하십시오.

```
lve('*').filter(t => t.density === 1)

or 

lve('*').filter(function (t) {
  return this.density === 1
})
```

이 메서드는 자바스크립트의 기본사양인 `Array.prototype.filter` 메서드와 비슷합니다.  
[이곳](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)에서 문서를 참고하십시오.

---

> return : `LveJSObjectSession` | `LveJSObject`