import setHiddenContext from '../../Utils/setHiddenContext'


let handler

handler = {}
handler.__getter = {}

handler.__getter.sprite_playing = handler.__getter.sprite_playing = handler.__getter.sprite_fps = handler.__getter.sprite_current = function (p, t) {

  p = p.substr(7)
  return t.spriteset[p]

}

handler.__getter.video_playbackRate = handler.__getter.video_currentTime = handler.__getter.video_volume = handler.__getter.video_muted = function (p, t) {

  p = p.substr(6)
  return t.videoset[p]

}

handler.__observer = function (p, v, t) {

  this.emit('attrmodified', {

    property: p,
    value: v

  })

}

handler.type = function (p, v, t) {

  this.__system__.style.d_type = 1

  if (v === 'camera') {
    this.__system__.style.d_type = 0
  }

  return v

}


handler.timescale = function (p, v, t) {

  this.__setTimescaleElement(v)
  return v

}


handler.src = function (p, v, t) {

  let f

  switch (this.type) {

    case 'image':
    case 'sprite':
    case 'video':
      this.__setInformationElement(v, () => {
        this.__setInformationSprite(this.style.width, this.style.height, this.spriteset.stage)
        this.__setTimescaleElement(this.timescale)
        this.__setPhysicsFixture()
      })
      break

    default:
      return ''

  }

  return v

}

handler.text = function (p, v, t) {

  if (this.type !== 'text') {
    return ''
  }

  this.__system__.text.content = v

  this.__setInformationText()
  this.__setPhysicsFixture()
  return v

}

handler.scene = function (p, v, t) {

  this.__system__.world.lve.requestCaching()
  return v

}


handler.followset = handler.spriteset = handler.dataset = handler.style = function (p, v, t) {

  for (let i in v) {

    this[p][i] = v[i]

  }

  return handler

}


handler.physics = function (p, v, t) {

  let B
  let y

  B = this.__system__.world.physics.box2d

  switch (v) {

    case 'dynamic':
      y = B.b2_dynamicBody
      break

    case 'static':
      y = B.b2_staticBody
      break

    default:
      y = null
      break

  }

  if (y === null) {
    this.__setPhysicsDestroy()
    return v
  }

  this.__setPhysicsBody()
  this.__system__.physics.body.SetType(y)
  this.__system__.physics.type = y

  return v

}

handler.density = function (p, v, t) {

  this.__setPhysicsDensity(v)
  return v

}

handler.friction = function (p, v, t) {

  if (!this.__system__.physics.body) {
    return v
  }

  this.__system__.physics.body.GetFixtureList().SetFriction(v)
  return v

}

handler.restitution = function (p, v, t) {

  if (!this.__system__.physics.body) {
    return v
  }

  this.__system__.physics.body.GetFixtureList().SetRestitution(v)
  return v

}

handler.gravityscale = function (p, v, t) {

  if (!this.__system__.physics.body) {
    return v
  }

  this.__system__.physics.body.SetGravityScale(v)
  return v

}

handler.fixedrotation = function (p, v, t) {

  if (!this.__system__.physics.body) {
    return v
  }

  this.__system__.physics.body.SetFixedRotation(v)
  return v

}

handler.sprite_playing = handler.sprite_stage = handler.sprite_fps = handler.sprite_current = function (p, v, t) {

  p = p.substr(7)
  t.spriteset[p] = v

  return v

}

handler.video_playbackRate = handler.video_currentTime = handler.video_volume = handler.video_muted = function (p, v, t) {

  p = p.substr(6)
  t.videoset[p] = v

  return v

}

export default handler