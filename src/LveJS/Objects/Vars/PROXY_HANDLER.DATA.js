let handler;


handler = {};
handler.__observer = function (p, v, t) {

  this.emit('datamodified', {

    propertyName: p,
    value: v

  });

};

export default handler;