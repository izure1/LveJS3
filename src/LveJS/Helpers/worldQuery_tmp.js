/**
 * 
 * @param {*} x Mouse X
 * @param {*} y Mouse Y
 * @param {*} cx Camera X
 * @param {*} cy Camera Y
 */
function queryAABB(B, W, x, y, cx, cy, s) {

  let aabb;
  let myQueryCallback;

  x += cx;
  y += cy;

  x /= s;
  y /= s;

  aabb = new B.b2AABB;
  myQueryCallback = new B.JSQueryCallback;

  aabb.set_lowerBound(new B.b2Vec2(x - 0.001, y - 0.001));
  aabb.set_upperBound(new B.b2Vec2(x + 0.001, y + 0.001));

  myQueryCallback.ReportFixture = function (ptr) {

    ptr = B.wrapPointer(ptr, B.b2Fixture);

    if (!ptr.TestPoint(ptr.GetBody().GetTransform(), this.m_point)) {
      return true;
    }

    this.m_target = ptr.GetBody();
    return false;

  };

  myQueryCallback.m_target = null;
  myQueryCallback.m_point = new B.b2Vec2(x, y);

  W.QueryAABB(myQueryCallback, aabb); // the AABB is a tiny square around the current mouse position

  return myQueryCallback.m_target;

}


export default function worldQuery(e) {

  let B, W;
  let a, x, y, s;
  let t;

  B = this.physics.box2d;
  W = this.physics.world;
  s = this.physics.setting.unitScale;
  a = this.renderer.getDrawArguments();

  x = e.offsetX;
  y = e.target.height - e.offsetY;

  if (!a.ready) {
    return;
  }

  a = a.value;
  t = queryAABB(B, W, x, y, a[3] - e.target.width / 2, a[4] - e.target.height / 2, s);

  if (!t) {
    return;
  }

  t = this.physics.map.get(t);

  if (!t) {
    return;
  }

  t.emit(e.type, e);

};