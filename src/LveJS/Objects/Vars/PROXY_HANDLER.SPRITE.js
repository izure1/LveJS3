let handler;


handler = {};
handler.__observer = function (p, v, t) {

  this.emit('spritemodified', {

    propertyName: p,
    value: v

  });

};

export default handler;