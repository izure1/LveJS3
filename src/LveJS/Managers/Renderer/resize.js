import screenfull from 'screenfull'


export default function resize() {

  let el = this.setting.canvas.element
  let {
    width = el.width,
      height = el.height,
  } = this.setting

  this.setting.width = width
  this.setting.height = height


  if (!screenfull.isFullscreen) {

    el.width = width
    el.height = height

  } else {

    el.dataset.LveFullscreenOriginWidth = width
    el.dataset.LveFullscreenOriginHeight = height

  }

  return this

}