let handler


function isVideoReady() {
  return this.element && this.element.play && this.element.readyState === 4 && this.type === 'video'
}

function returnAudioSetting(p) {
  return p in this.__system__.audio.setting ?
    this.__system__.audio.setting[p] :
    this.element[p]
}

handler = {}
handler.__getter = {}

handler.__getter.playbackRate = handler.__getter.currentTime = handler.__getter.volume = handler.__getter.muted = function (p, t) {

  return returnAudioSetting.call(this, p)

}

handler.__observer = function (p, v, t) {

  this.emit('videomodified', {
    property: p,
    value: v,
  })

}

handler.playbackRate = handler.currentTime = handler.volume = function (p, v, t) {

  if (isVideoReady.call(this)) {
    this.element[p] = v
  }

  this.__system__.audio.setting[p] = v
  return returnAudioSetting.call(this, p)

}

handler.muted = function (p, v, t) {

  if (isVideoReady.call(this)) {
    this.element.muted = v
  }

  this.__system__.audio.setting.muted = v
  this.__system__.audio.video_mute = v

  return v

}

export default handler