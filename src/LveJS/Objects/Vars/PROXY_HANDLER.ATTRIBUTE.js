let handler = {};



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

export default handler;