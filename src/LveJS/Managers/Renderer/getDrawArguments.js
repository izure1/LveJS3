export default function getDrawArguments() {

  let t;
  let c;
  let ca;

  t = this;
  c = this.setting.canvas;
  ca = this.camera;

  if (!ca) {
    return {
      ready: false,
      value: [c.context, c.element.width, c.element.height]
    }
  }

  return {
    ready: true,
    value: [
      c.context,
      c.element.width,
      c.element.height,
      ca.style.left,
      ca.style.bottom + ca.__system__.style.height * ca.style.scale,
      ca.style.perspective,
      t.setting.scaleDistance
    ]
  };

};