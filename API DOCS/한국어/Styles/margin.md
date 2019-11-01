# margin : `String`

물리 객체의 여백을 지정합니다.

해당 객체가 물리 효과를 받고 있을 경우, 이 객체의 상단에 값만큼 빈 공간이 생깁니다.  
다른 물리 객체는 이 여백을 침투할 수 없습니다.

이는 `margin` 속성들의 단축형입니다. 사용 방법은 다음과 같으며, 띄어쓰기로 구분할 수 있습니다.

```
margin: '10'
```

값을 `1`개 입력했을 경우, `marginLeft`, `marginRight`, `marginTop`, `marginBottom` 속성값 모두 `10`으로 설정됩니다.

---

```
margin: '10 20'
```

값을 `2`개 입력했을 경우,  
`marginTop`, `marginBottom` 속성값은 `10`,  
`marginLeft`, `marginRight` 속성값은 `20`으로 설정됩니다.

---

```
margin: '10 20 30'
```

값을 `3`개 입력했을 경우,  
`marginTop` 속성값은 `10`,  
`marginLeft`, `marginRight` 속성값은 `20`,  
`marginBottom` 속성값은 `30`으로 설정됩니다.

---

```
margin: '10 20 30 40'
```

값을 `4`개 입력했을 경우, 시계 방향으로  
`marginTop` 속성값은 `10`,  
`marginRight` 속성값은 `20`,  
`marginBottom` 속성값은 `30`,
`marginLeft` 속성값은 `40`으로 설정됩니다.