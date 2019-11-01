# findClass(className)

> className : `String`  
  검색할 클래스 이름입니다.

---

검색된 객체 중, 특정 클래스를 가진 객체만을 담아 반환합니다.

모든 객체는 클래스를 가질 수 있고, 서로 같은 클래스를 가질 수도 있습니다. 가령 월드 전체의 객체 중, `squareA` 라는 클래스를 가진 객체만을 얻고 싶다면 아래 예제를 참고하십시오.

```
lve('*').findClass('squareA')
```

`squareA`, 그리고 `squareB` 클래스를 동시에 가진 객체를 찾고 싶다면, 두 번 사용하십시오.


```
lve('*').findClass('squareA').findClass('squareB')
```

---

> return : `LveJSObjectSession` | `LveJSObject`