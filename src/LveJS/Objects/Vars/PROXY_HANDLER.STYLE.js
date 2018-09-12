import getSizeofElement from '../../Helpers/getSizeofElement';
import {
  radToDeg,
  degToRad
} from '../../Utils/math';


let handler;

handler = {};
handler.__observer = function (p, v, t) {

  this.emit('cssmodified', {

    propertyName: p,
    value: v

  });

};


handler.width = handler.height = function (p, v, t) {

  let w;
  let d;

  let sw, sh;
  let c, vp;

  w = this.__system__.world;
  w.lve.start(w => {

    sw = this.style.width;
    sh = this.style.height;
    vp = w.renderer.setting.canvas.element;

    switch (p) {

      case 'width':
        sw = v;
        break;

      case 'height':
        sh = v;
        break;

    }

    switch (this.type) {

      case 'text':
        this.__setInformationText();
        break;

      case 'sprite':
        this.__setInformationSprite(sw, sh, this.spriteset.stage);
        break;

      default:
        c = this.element || {};
        d = getSizeofElement(c, sw, sh, vp.width, vp.height);

        this.__system__.style[p] = d[p];
        break;

    }

    this.__setPhysicsFixture();

  });

  return v;

};

handler.position = function (p, v, t) {

  let fx;
  let rx;

  switch (v) {

    case 'absolute':
      fx = 0.5;
      rx = 0.5;
      break;

    case 'fixed':
      fx = 0;
      rx = 0.5;
      break;

  }

  this.__system__.style.fx = fx;
  this.__system__.style.rx = rx;

  this.__setPhysicsFixture();
  return v;

};

handler.verticalAlign = function (p, v, t) {

  let fy;
  let ry;

  switch (v) {

    case 'top':
      fy = 1;
      ry = 1
      break;

    case 'middle':
      fy = 0.5;
      ry = 0.5;
      break;

    case 'bottom':
      fy = 0;
      ry = 0;
      break;

  }

  this.__system__.style.fy = fy;
  this.__system__.style.ry = ry;

  this.__setPhysicsFixture();
  return v;

};


handler.fontSize = handler.fontFamily = handler.fontStyle = handler.fontWeight = handler.textAlign = handler.lineHeight = handler.color = function (p, v, t) {

  if (this.type !== 'text') {
    return v;
  }

  this.__setInformationText();
  this.__setPhysicsFixture();
  return v;

};


handler.left = handler.bottom = handler.perspective = function (p, v) {

  let w;
  let t;

  w = this.__system__.world;

  for (let i of this.followset.follower) {

    t = w.hashTable.select(i);
    t = t[0];

    if (!t) continue;

    t.__followUpdate(p, v);

  }

  switch (p) {

    case 'left':
      this.__setPhysicsTransform(v, this.style.bottom, this.style.rotate);
      break;

    case 'bottom':
      this.__setPhysicsTransform(this.style.left, v, this.style.rotate);
      break;

    case 'perspective':
      w.lve.requestCaching();
      break;

  }

  return v;

};


handler.opacity = function (p, v, t) {

  if (v > 1) {
    v = 1;
  }

  if (v <= 0) {
    v = 0;
  }

  this.__system__.style.d_opacity = v;
  return v;

};


handler.display = function (p, v, t) {

  let r;

  if (v !== 'block') {
    v = 'none';
    r = 0;
  } else {
    r = 1;
  }

  this.__system__.style.d_display = r;

  this.__setPhysicsActive('display', r);

  return v;

};


handler.rotate = function (p, v, t) {

  this.__setPhysicsTransform(this.style.left, this.style.bottom, v);
  return v;

};


handler.scale = function (p, v, t) {

  this.__system__.style.scale = v;
  this.__setPhysicsFixture();
  return v;

};

export default handler;