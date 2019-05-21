export default function getMouseCoords(e, reverse = true) {

  let a, p
  let x, y

  a = this.renderer.getRenderStates()

  if (!a.ready) {
    return
  }

  a = a.value
  a = a[9]
  p = this.renderer.getMouseCoords(e)

  x = p.x / a
  y = p.y / a

  if (reverse) {
    y = this.renderer.setting.height - y
  }

  return {
    x,
    y
  }

}