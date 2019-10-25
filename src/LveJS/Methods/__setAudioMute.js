export default function __setAudioMute(v = false) {

  if (!this.element || !this.element.play) {
    return this
  }

  this.__system__.audio.level_mute = this.element.muted = v

  let {
    video_mute,
    level_mute
  } = this.__system__.audio


  if (video_mute && !level_mute) {
    this.element.muted = true
  }

  return this

}