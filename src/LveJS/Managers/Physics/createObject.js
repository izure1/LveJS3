/**
 * 
 * @param {LveJSObject} t LveJSObject
 * @param {*} B Body def
 * @param {*} F Fixture def
 */
export default function createObject(t, B, F) {

  let r;

  r = this.world.CreateBody(B);
  r.CreateFixture(F);

  this.map.set(r, t);

  return r;

};