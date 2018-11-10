let handler;
let defaultCursor;

defaultCursor = 'auto';

handler = {};
handler.mouseover = function () {

  let c;

  c = this.__system__.world.renderer.setting.canvas;

  if (!c) {
    return;
  }

  defaultCursor = getComputedStyle(c.element).cursor;

  c.element.style.cursor = this.style.cursor;

};

handler.mouseout = function () {

  let c;

  c = this.__system__.world.renderer.setting.canvas;

  if (!c) {
    return;
  }

  c.element.style.cursor = defaultCursor;

};


export default handler;