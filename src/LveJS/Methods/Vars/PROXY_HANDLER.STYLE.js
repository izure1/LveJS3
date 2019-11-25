import getSizeofElement from '../../Helpers/getSizeofElement'
import {
  radToDeg,
  degToRad
} from '../../Utils/math'


let handler

handler = {}
handler.__getter = null
handler.__observer = function (p, v, t) {

  this.emit('cssmodified', {

    property: p,
    value: v

  })

}


handler.width = handler.height = function (p, v, t) {

  let w
  let d

  let sw, sh
  let c, vp

  w = this.__system__.world
  w.lve.start(() => {

    sw = this.style.width
    sh = this.style.height
    vp = w.canvas

    switch (p) {

      case 'width':
        sw = v
        break

      case 'height':
        sh = v
        break

    }

    switch (this.type) {

      case 'text':
        this.__setInformationText()
        break

      case 'sprite':
        this.__setInformationSprite()
        break

      default:
        this.__onElementReady(() => {
          
          c = this.element || {}
          d = getSizeofElement(c, sw, sh, vp.width, vp.height)

          this.__system__.style.width = d.width
          this.__system__.style.height = d.height

          this.__setPhysicsFixture()
          
        })
        break

    }

  })

  return v

}

handler.position = function (p, v, t) {

  let fx
  let rx

  switch (v) {

    case 'absolute':
      fx = 0.5
      rx = 0.5
      break

    case 'fixed':
      fx = 0
      rx = 0.5
      break

  }

  this.__system__.style.fx = fx
  this.__system__.style.rx = rx

  this.__setPhysicsFixture()
  return v

}

handler.verticalAlign = function (p, v, t) {

  let fy
  let ry

  switch (v) {

    case 'top':
      fy = 1
      ry = 1
      break

    case 'middle':
      fy = 0.5
      ry = 0.5
      break

    case 'bottom':
      fy = 0
      ry = 0
      break

  }

  this.__system__.style.fy = fy
  this.__system__.style.ry = ry

  this.__setPhysicsFixture()
  return v

}


handler.fontSize = handler.fontFamily = handler.fontStyle = handler.fontWeight = handler.textAlign = handler.lineHeight = handler.color = handler.borderWidth = handler.borderColor = function (p, v, t) {

  if (this.type !== 'text') {
    return v
  }

  this.__setInformationText()
  return v

}


handler.left = handler.bottom = handler.perspective = function (p, v) {

  let w
  let t

  w = this.__system__.world

  for (let i of this.followset.follower) {

    t = w.hashTable.select(i)
    t = t[0]

    if (!t) continue

    t.__followUpdate(p, v, this)

  }

  switch (p) {

    case 'left':
      this.__setPhysicsTransform(v, this.style.bottom, this.style.rotate)
      break

    case 'bottom':
      this.__setPhysicsTransform(this.style.left, v, this.style.rotate)
      break

    case 'perspective':
      if (this.type === 'camera' || this.type === 'particle') break
      w.lve.requestCaching()
      break

  }

  return v

}


handler.opacity = function (p, v, t) {

  if (v > 1) {
    v = 1
  }

  if (v <= 0) {
    v = 0
  }

  this.__system__.style.d_opacity = v
  return v

}


handler.display = function (p, v, t) {

  let r

  if (v !== 'block') {
    v = 'none'
    r = 0
  } else {
    r = 1
  }

  this.__system__.style.d_display = r

  this.__setPhysicsActive('display', r)

  return v

}


handler.rotate = function (p, v, t) {

  this.__setPhysicsTransform(this.style.left, this.style.bottom, v)
  return v

}


handler.scale = function (p, v, t) {

  this.__system__.style.scale = v
  this.__onElementReady(() => {
    this.__setPhysicsFixture()
  })
  return v

}


handler.margin = function (p, v, t) {

  let ml, mr, mt, mb

  v = `${v}`.trim()
  v = v.split(' ')
  v = v.map(t => parseFloat(t))

  switch (v.length) {

    case 1:
      ml = mr = mt = mb = v[0]
      break

    case 2:
      mt = mb = v[0]
      ml = mr = v[1]
      break

    case 3:
      mt = v[0]
      ml = mr = v[1]
      mb = v[2]
      break

    case 4:
      mt = v[0]
      mr = v[1]
      mb = v[2]
      ml = v[3]
      break

    default:
      mt = this.__system__.style.marginTop || 0
      mr = this.__system__.style.marginRight || 0
      mb = this.__system__.style.marginBottom || 0
      ml = this.__system__.style.marginLeft || 0
      break

  }

  this.__system__.style.marginLeft = ml
  this.__system__.style.marginRight = mr
  this.__system__.style.marginTop = mt
  this.__system__.style.marginBottom = mb

  this.__onElementReady(() => {
    this.__setPhysicsFixture()
  })

  return `${mt} ${mr} ${mb} ${ml}`

}


handler.marginLeft = handler.marginRight = handler.marginTop = handler.marginBottom = function (p, v, t) {

  if (v < 0) {
    v = 0
  }

  this.__system__.style[p] = v
  this.__onElementReady(() => {
    this.__setPhysicsFixture()
  })

  return v

}

export default handler