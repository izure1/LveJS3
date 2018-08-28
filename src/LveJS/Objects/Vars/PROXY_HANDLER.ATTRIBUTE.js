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

  let f;

  switch (this.type) {

    case 'image':
    case 'sprite':
    case 'video':
      this.__setInformationElement(v);
      this.__setPhysicsFixture();
      break;

    default:
      return '';

  }

  return v;

};

handler.text = function (p, v, t) {

  if (this.type !== 'text') {
    return '';
  }

  this.__setInformationText();
  this.__setPhysicsFixture();
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


handler.physics = function (p, v, t) {

  let B;
  let y;

  B = this.__system__.world.physics.box2d;

  switch (v) {

    case 'dynamic':
      y = B.b2_dynamicBody;
      break;

    case 'static':
      y = B.b2_staticBody;
      break;

    default:
      y = null;
      break;

  }

  if (y !== null) {

    this.__system__.physics.body.SetType(y);
    this.__setPhysicsActive('physics', 1);

  } else {

    this.__setPhysicsActive('physics', 0);

  }

  return v;

};

handler.density = function (p, v, t) {

  this.__system__.physics.body.GetFixtureList().SetDensity(v);
  return v;

};

handler.friction = function (p, v, t) {

  this.__system__.physics.body.GetFixtureList().SetFriction(v);
  return v;

};

handler.restitution = function (p, v, t) {

  this.__system__.physics.body.GetFixtureList().SetRestitution(v);
  return v;

};

handler.gravityscale = function (p, v, t) {

  this.__system__.physics.body.SetGravityScale(v);
  return v;

};

export default handler;