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

  let r = true

  if (!(a.__system__.physics.active && b.__system__.physics.active)) {
    r = false
  }

  if (a.style.perspective !== b.style.perspective) {
    r = false
  }

  if (a.style.position !== b.style.position) {
    r = false
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