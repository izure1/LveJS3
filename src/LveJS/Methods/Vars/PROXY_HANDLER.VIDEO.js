let handler


handler = {}
handler.__getter = {}

handler.__getter.playbackRate = handler.__getter.currentTime = handler.__getter.volume = handler.__getter.muted = function(p, t) {

  if (!this.element && !this.element.play) {
    return null
  }

  return this.element[p]

}

handler.__observer = function (p, v, t) {

  this.emit('videomodified', {

    property: p,
    value: v

  })

}

handler.playbackRate = function (p, v, t) {

  if (this.type !== 'video') {
    return handler
  }

  this.element.playbackRate = v
  return v

}

handler.currentTime = function (p, v, t) {

  if (this.type !== 'video') {
    return handler
  }

  this.element.currentTime = v
  return v

}

handler.volume = function (p, v, t) {

  if (this.type !== 'video') {
    return handler
  }

  this.element.volume = v
  return v

}

handler.muted = function (p, v, t) {

  if (this.type !== 'video') {
    return handler
  }

  this.element.muted = v
  this.__system__.audio.video_mute = v
  
  return v

}

export default handler