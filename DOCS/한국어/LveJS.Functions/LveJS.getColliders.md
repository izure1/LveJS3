# LveJS.getColliders()

`lve.createCollider` 함수로 월드에 등록된 모든 충돌기를 반환합니다.  
`collider.destroy()` 메서드로 파괴된 충돌기는 반환되지 않습니다.

```
const colliders = lve.getColliders()

colliders.iterate(collider => {
    collider.destroy()
})
```

---

> return : `Set`  
  충돌기가 등록된 `Set` 객체입니다.