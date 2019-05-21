export default function onExitFullscreen() {

  let c
  let w, h
  let d, s

  c = this.setting.canvas.element
  d = c.width > c.height ? 'width' : 'height'

  s = screen[d] / c[d]
  w = this.setting.width
  h = this.setting.height

  c.dataset.LveFullscreenOriginWidth = w
  c.dataset.LveFullscreenOriginHeight = h

  c.width = w * s
  c.height = h * s

  this.setting.canvasScale = s

}