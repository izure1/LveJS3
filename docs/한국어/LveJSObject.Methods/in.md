# in(level [, extend])

> level : `String`  
  검색할 레벨 이름입니다.

> extend : `Boolean`  
  하위 레벨도 포함하여 검색할지 여부를 지정합니다. 기본값은 `false`입니다.

---

검색된 객체들 중 `level` 매개변수로 지정된 레벨에 속한 객체를 담아 반환합니다.  
만일 그 하위 레벨에 속한 객체들도 얻고 싶다면, `extend` 매개변수를 `true`로 기입하십시오.

다음과 같이 사용할 수 있습니다.

```
// level-A 레벨에 속한 객체들만 담습니다.
lve('*').in('level-A')

// 만일 level-A::under 같은 하위 레벨에 속한 객체도 담고 싶으면 extend 매개변수를 사용하십시오.
lve('*').in('level-A', true)
```

---

> return : `LveJSObjectSession` | `LveJSObject`