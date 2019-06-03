export default function getRenderStates(ca = this.camera) {

  let t
  let c

  t = this
  c = this.setting.canvas

  let n, w, h

  n = c.context ? c.context : undefined
  w = c.element ? c.element.width : undefined
  h = c.element ? c.element.height : undefined

  if (!ca || !c.context || !c.element) {
    return {
      ready: false,
      value: [
        n,
        w,
        h,
      ]
    }
  }

  return {
    ready: true,
    value: [
      n,
      w,
      h,
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