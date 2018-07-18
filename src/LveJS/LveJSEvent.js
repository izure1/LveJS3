'use strict';


class LveJSEvent {

  constructor(e, target = null) {
    this.type = e;
    this.target = target;
  }

}

LveJSEvent.prototype.attachProperties = function (o = {}) {

  if (o instanceof MouseEvent) e.originalEvent = o;
  else {
    Object.assign(this, o);
  }

  return this;

};

export default LveJSEvent;