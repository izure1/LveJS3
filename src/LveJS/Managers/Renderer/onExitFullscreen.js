export default function onFullscreen() {

  let c

  c = this.setting.canvas.element

  c.width = c.dataset.LveFullscreenOriginWidth
  c.height = c.dataset.LveFullscreenOriginHeight

  delete c.dataset.LveFullscreenOriginWidth
  delete c.dataset.LveFullscreenOriginHeight

  this.setting.canvasScale = 1

}