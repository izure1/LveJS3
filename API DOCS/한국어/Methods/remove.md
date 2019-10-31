# remove([includeFollowers])

> includeFollowers : `Boolean` | `Function`
  이 객체를 follow 메서드로 따라다니는 객체도 함께 삭제할지 여부를 지정합니다.  
  기본값은 `false`입니다.

---

생성된 객체를 월드에서 삭제합니다. 객체에서 사용되는 모든 메모리는 반환됩니다.

```
lve('yourObject').remove()
```

이 객체를 따라다니는 팔로워 객체들을 함께 삭제하고 싶다면, `includeFollowers` 매개변수를 true로 기입해주시길 바랍니다. 이 `includeFollowers` 매개변수는 ***해당 팔로워 객체를 삭제하고, 그 객체의 또 다른 팔로워를 재귀적으로 삭제***해갈 것입니다. 따라서, `true`로 값을 지정하면 해당 객체의 움직임의 영향을 받는 하위 모든 팔로워가 삭제됩니다.

아래와 같이 사용할 수 있습니다.

```
lve('yourObject').remove(true)
```

만일 원하는 객체까지만 삭제하고, 그 이후의 객체를 삭제하고 싶지 않다면, `true`대신, 함수를 기입하십시오.

```
lve('yourObject').remove(function () {

  // 이름이 'stop-remove-object'가 나오기 전까지 팔로워들은 재귀적으로 삭제됩니다
  if (this.name === 'stop-remove-object') {
    return false
  }

  return true

})
```

---

### 주의사항

`remove` 메서드의 객체 삭제 방식은, 변수 사이의 연결점을 끊어 자바스크립트의 가비지컬렉터가 이를 수집해가는 것을 목표로 합니다. 따라서, 이 객체를 더 이상 변수로 참조하지 마십시오. 가령 아래와 같은 코드는, 객체가 LveJS 월드에서 제거는 되지만, 메모리에는 그대로 남아있게 될 수 있습니다.

```
// 객체는 월드에서 삭제되었지만, removed 변수가 계속 참조하고 있기 때문에 가비지컬렉터가 메모리를 수집해가지 않습니다.
const removed = lve('yourObject').remove()
```

---

> return : `LveJSObjectSession` | `LveJSObject`