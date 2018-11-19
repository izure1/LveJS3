let handler;

handler = {};
handler.mouseover = function () {

  let c;

  c = this.__system__.world.renderer.setting.canvas;

  if (!c) {
    return;
  }

  this.__system__.world.cache.mouseCursor = getComputedStyle(c.element).cursor;

  c.element.style.cursor = this.style.cursor;

};

handler.mouseout = function () {

  let c;

  c = this.__system__.world.renderer.setting.canvas;

  if (!c) {
    return;
  }

  c.element.style.cursor = this.__system__.world.cache.mouseCursor;

};


export default handler;