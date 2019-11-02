# kick([followers])

> followers : `Array`

---

객체를 따라다니는 팔로워 객체를 제거합니다.  

`followers` 매개변수를 배열로 넘길 경우, 해당 배열에 들어간 이름을 가지고 있는 팔로워 객체들을 제거합니다. 아래 예제를 확인하십시오.

```
// myObject 객체를 따라다니는 객체 중, objectA, objectB 라는 이름을 가진 객체를 제거합니다
lve('myObject').kick([ 'objectA', 'objectB' ])
```

만일 `followers` 매개변수를 기입하지 않았을 경우, 모든 팔로워 객체를 제거합니다.

```
// myObject 객체를 따라다니는 모든 팔로워 객체를 제거합니다
lve('myObject').kick()
```

---

> return : `LveJSObjectSession` | `LveJSObject`