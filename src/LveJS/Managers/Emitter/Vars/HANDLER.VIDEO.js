let handler

handler = {}
handler.ended = function () {

  if (this.loop) {
    this.element.currentTime = 0
    this.play()
  }

}

handler.timeupdate = function () {

  this.__system__.audio.setting.currentTime = this.element.currentTime

}


export default handler