let handler;


handler = {};
handler.__observer = function (p, v, t) {

  this.emit('spritemodified', {

    propertyName: p,
    value: v

  });

};

handler.stage = function (p, v, t) {

  if (this.type !== 'sprite') {
    return handler;
  }

  return v;

};

export default handler;