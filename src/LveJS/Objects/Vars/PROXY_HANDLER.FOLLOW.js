let handler;


handler = {};
handler.__observer = function (p, v, t) {

  this.emit('followmodified', {

    propertyName: p,
    value: v

  });

};

export default handler;