# lineHeight : `String` | `Number`

`text` 타입의 객체의 문자열 줄간격을 지정합니다.  
숫자로 입력할 경우, 단위는 `px`입니다. 문자열로 입력할 경우, 단위는 `percentage`입니다.

아래 예시를 보십시오.

```
// 이 객체의 문자열은 30px만큼 줄간격이 지정됩니다.
lineHeight: 30
```

문자열로 기입할 경우는 `style.fontSize`의 영향을 받습니다. 해당 문자열에서 가장 큰 글자의 `style.fontSize`값을 기반으로 퍼센티지로 계산되어 반환됩니다. 아래와 같습니다.

```
fontSize: 50,

// 객체의 style.fontSize가 50이므로, 줄간격은 그 100%인 50px가 됩니다.
lineHeight: '100%'
```