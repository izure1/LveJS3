export default function getRenderStates(ca = this.camera) {

  let t
  let c

  t = this
  c = this.setting.canvas

  if (!ca) {
    return {
      ready: false,
      value: [
        c.context,
        c.element.width,
        c.element.height,
      ]
    }
  }

  return {
    ready: true,
    value: [
      c.context,
      c.element.width,
      c.element.height,
      ca.__system__.style.height,
      ca.style.left,
      ca.style.bottom + ca.__system__.style.height * ca.__system__.style.scale * ca.__system__.style.ry,
      ca.style.perspective,
      ca.style.rotate,
      t.setting.scaleDistance,
      t.setting.canvasScale
    ]
  }

}