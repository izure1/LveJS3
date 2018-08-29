import {
  isZero,
  isUndefined
} from '../Utils/types';


function getFixturePoint(v = 0.5, h = 1) {

  return (v / 0.5 - 1) * h;

}


export default function getFixture() {

  let physics;
  let w, h;
  let x, y;
  let s;

  let F;

  physics = this.__system__.world.physics;

  w = this.__system__.style.width || 1;
  h = this.__system__.style.height || 1;
  x = this.__system__.style.fx;
  y = this.__system__.style.fy;
  s = this.__system__.style.scale;

  if (isNaN(x)) x = 0.5;
  if (isNaN(y)) y = 0.5;
  if (isNaN(s)) s = 1;

  w *= s;
  h *= s;
  x = getFixturePoint(x, w);
  y = getFixturePoint(y, h);

  F = physics.createFixture(this, w, h, this.density, this.friction, this.restitution, x, y);

  return F;

};