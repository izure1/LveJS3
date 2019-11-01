# use()

LveJS 월드를 바라보는 카메라를 지정합니다. 이 메서드를 호출한 객체가 카메라가 됩니다.

카메라는 타입과 상관없이 어떤 객체라도 될 수 있습니다.  
물론, 가장 적합한 객체의 타입은 `camera` 타입입니다.

아래 예제를 확인하십시오.

```
// camera 객체를 월드를 바라보는 메인카메라로 만듭니다.
lve('camera').use()
```

---

> return : `LveJSObjectSession` | `LveJSObject`