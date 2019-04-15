let handler


function isVideoReady() {
  return this.element && this.element.play && this.element.readyState === 4 && this.type === 'video'
}

handler = {}
handler.__getter = {}

handler.__getter.playbackRate = handler.__getter.currentTime = handler.__getter.volume = handler.__getter.muted = function (p, t) {

  if (!isVideoReady.call(this)) {
    return this.__system__.audio.setting[p]
  }

  if (p === 'muted') {
    return this.__system__.audio.setting.muted
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

  if (!isVideoReady.call(this)) {
    return this.videoset[p]
  }

  this.element.playbackRate = v
  this.__system__.audio.setting.playbackRate = v

  return v

}

handler.currentTime = function (p, v, t) {

  if (!isVideoReady.call(this)) {
    return this.videoset[p]
  }

  this.element.currentTime = v
  this.__system__.audio.setting.currentTime = 0

  return v

}

handler.volume = function (p, v, t) {

  if (!isVideoReady.call(this)) {
    return this.videoset[p]
  }

  this.element.volume = v
  this.__system__.audio.setting.volume = v

  return v

}

handler.muted = function (p, v, t) {

  if (!isVideoReady.call(this)) {
    return this.videoset[p]
  }

  this.element.muted = v
  this.__system__.audio.setting.muted = v
  this.__system__.audio.video_mute = v

  return v

}

export default handler