let handler;


handler = {};
handler.__observer = function (p, v, t) {

  this.emit('cssmodified', {

    propertyName: p,
    value: v

  });

};


handler.width = handler.height = function (p, v, t) {

  let f;
  let r;

  f = this.__proto__[`__setInformation_${this.type}`];

  if (f) f.call(this);
  else {

    r = v;

    if (v === 'auto') {
      r = 100;
    }

    this.__system__.style[p] = r;

  }

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
  return v;

};


handler.fontSize = handler.fontFamily = handler.fontStyle = handler.fontWeight = handler.textAlign = handler.lineHeight = handler.color = function (p, v, t) {

  if (this.type !== 'text') {
    return v;
  }

  this.__setInformation_text();
  return v;

};

export default handler;