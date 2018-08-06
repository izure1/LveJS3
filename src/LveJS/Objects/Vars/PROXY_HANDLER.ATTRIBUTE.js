let handler;


handler = {};
handler.__observer = function (p, v, t) {

  this.emit('attrmodified', {

    propertyName: p,
    value: v

  });

};

handler.type = function (p, v, t) {

  this.__system__.style.d_type = 1;

  if (v === 'camera') {
    this.__system__.style.d_type = 0;
  }

  return v;

};


handler.src = function (p, v, t) {

  switch (this.type) {

    case 'image':
    case 'sprite':
    case 'video':
      break;

    default:
      return '';

  }

  this.__setInformation_image();
  return v;

};

handler.text = function (p, v, t) {

  if (this.type !== 'text') {
    return '';
  }

  this.__setInformation_text();
  return v;

};

handler.scene = function (p, v, t) {

  this.__system__.world.lve.requestCaching();
  return v;

};


handler.followset = handler.spriteset = handler.dataset = handler.style = function (p, v, t) {

  for (let i in v) {

    this[p][i] = v[i];

  }

  return handler;

};

export default handler;