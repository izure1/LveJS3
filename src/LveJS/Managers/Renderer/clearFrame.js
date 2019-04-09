export default function clearFrame(l) {

  let c
  let w, h

  c = this.setting.canvas.context

  this.subjects = []

  w = c.canvas.width
  h = c.canvas.height

  c.globalAlpha = 1
  c.fillStyle = l

  c.setTransform(1, 0, 0, 1, 0, 0)
  c.beginPath()
  c.clearRect(0, 0, w, h)
  c.fillRect(0, 0, w, h)

}