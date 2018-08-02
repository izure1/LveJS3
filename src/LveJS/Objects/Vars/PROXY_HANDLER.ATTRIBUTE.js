let handler;


handler = {};
handler.__observer = function (p, v, t) {

  this.emit('attrmodified', {

    propertyName: p,
    value: v

  });

};


handler.src = function (p, v, t) {

  if (this.type !== 'image') {
    return v;
  }

  this.__setInformation_image();
  return v;

};

handler.text = function (p, v, t) {

  if (this.type !== 'text') {
    return v;
  }

  this.__setInformation_text();
  return v;

};

handler.scene = function(p, v, t) {

  this.__system__.world.lve.requestCaching();
  return v;

};

export default handler;