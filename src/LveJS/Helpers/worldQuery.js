export default function worldQuery(e) {

  let Box2D;
  let args, x, y, aabb, myQueryCallback;

  Box2D = this.physics.box2d;
  args = this.renderer.getDrawArguments();

  x = e.target.width / 2 + e.offsetX;
  y = e.target.height - e.offsetY;

  // 현재 사용중인 카메라 x, y 좌표에 따른 화면 위치 보정을 합니다
  x += args[3];
  y += args[4];


  aabb = new Box2D.b2AABB();
  aabb.set_lowerBound(new Box2D.b2Vec2(x - 0.001, y - 0.001));
  aabb.set_upperBound(new Box2D.b2Vec2(x + 0.001, y + 0.001));

  myQueryCallback = new Box2D.JSQueryCallback();
  myQueryCallback.ReportFixture = function (ptr) {

    ptr = Box2D.wrapPointer(ptr, Box2D.b2Fixture);

    // mouse cannot drag static bodies around
    // if (fixture.GetBody().GetType() !== Box2D.b2_dynamicBody) {
    //   continue;
    // }

    if (!ptr.TestPoint(this.m_point)) {
      return true;
    }

    this.m_target = 1;
    console.log(ptr);
    return false;

  };

  myQueryCallback.m_target = null;
  myQueryCallback.m_point = new Box2D.b2Vec2(x, y);

  this.physics.world.QueryAABB(myQueryCallback, aabb); // the AABB is a tiny square around the current mouse position

  if (myQueryCallback.m_target) {

    t.emit(e.type, e);

  }

};