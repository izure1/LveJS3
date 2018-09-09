import {
  radToDeg
} from '../Utils/math';


export default function __physicsUpdate() {

  let physics;
  let pos;
  let s;

  if (!this.__system__.physics.body) {
    return this;
  }

  if (!this.__system__.physics.body.IsActive()) {
    return this;
  }

  s = this.__system__.world.physics.setting.unitScale;
  physics = this.__system__.physics;

  pos = physics.body.GetPosition();
  physics.force = false;

  this.style.left = pos.get_x() * s;
  this.style.bottom = pos.get_y() * s;
  this.style.rotate = radToDeg(physics.body.GetAngle());

  physics.force = true;

  return this;

};