function getContactObjects(B, ptr) {

  let a, b

  ptr = B.wrapPointer(ptr, B.b2Contact)
  a = ptr.GetFixtureA().GetBody()
  b = ptr.GetFixtureB().GetBody()

  return {
    a,
    b,
    pointer: ptr
  }

}

function checkCollisionAble(a, b) {

  let r = false

  for (let collider of this.colliders) {

    // 객체 a, b 가 각자 classA, classB 를 소유하고 있을 경우
    r =
      a.hasClass(collider.a) && b.hasClass(collider.b) ||
      a.hasClass(collider.b) && b.hasClass(collider.a)

    // 소유하지 않았을 경우 다음 충돌기 확인
    if (!r) continue

    // 소유하고 있을 경우 아래 조건을 충족해야함
    if (!(a.__system__.physics.active && b.__system__.physics.active)) {
      r = false
      break
    }

    if (a.style.position !== b.style.position) {
      r = false
      break
    }

    // 모든 조건을 충족하였을 경우 탐색 종료
    r = true
    break

  }

  return r

}


export default function getContactListener() {

  let B
  let r
  let m

  B = this.box2d
  m = this.map
  r = new B.JSContactListener

  checkCollisionAble = checkCollisionAble.bind(this)

  r.BeginContact = function (ptr) {

    let {
      a,
      b
    } = getContactObjects(B, ptr)

    a = m.get(a)
    b = m.get(b)

    // check ignore
    if (checkCollisionAble(a, b)) {

      // emit contactstart event
      a.emit('contactstart', {
        another: b
      })
      b.emit('contactstart', {
        another: a
      })

    }

  }
  r.PreSolve = function (ptr) {

    let {
      a,
      b,
      pointer
    } = getContactObjects(B, ptr)

    a = m.get(a)
    b = m.get(b)

    // check ignore
    if (!checkCollisionAble(a, b)) {

      pointer.SetEnabled(false)

    }

    return false

  }
  r.PostSolve = function () {}
  r.EndContact = function (ptr) {

    let {
      a,
      b
    } = getContactObjects(B, ptr)

    // emit contactend event
    a = m.get(a)
    b = m.get(b)

    if (checkCollisionAble(a, b)) {

      a.emit('contactend', {
        another: b
      })
      b.emit('contactend', {
        another: a
      })

    }

  }

  return r

}