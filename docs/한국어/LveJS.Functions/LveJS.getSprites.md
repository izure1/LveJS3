# LveJS.getSprites()

`lve.createSprite` 함수로 월드에 등록된 모든 스프라이트 모션 정보를 반환합니다.  
`sprite.destroy()` 메서드로 파괴된 스프라이트 모션 정보는 반환되지 않습니다.

```
const sprites = lve.getSprites()

sprites.forEach(sprite => {
    sprite.destroy()
})
```

---

> return : `Map`  
  스프라이트 모션 정보가 등록된 `Map` 객체입니다.