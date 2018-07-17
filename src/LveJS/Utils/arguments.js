'use strict';

function getProperties(t = Object.keys(this)) {

  let r = {};

  if (!Array.isArray(t)) {
    t = [t];
  }

  for (const p in this) {
    if (t.indexOf(p) !== -1) r[p] = this[p];
  }

  return r;

}

function parseArguments(p, v) {


  /*
   *  넘겨온 매개변수 갯수에 따라서 할 일을 결정합니다.
   * 
   *  예를 들어, 매개변수가 없을 경우, 객체의 모든 속성들을 Object 자료형으로 넘깁니다.
   *  매개변수가 한 개일 때는, 객체의 해당 속성값만을 넘깁니다.
   * 
   *  두 개 이상부터는 값 대입입니다.
   *  그러나 예외적으로 매개변수가 한 개임에도 불구하고, Object 자료형이라면 대입으로 간주합니다.
   * 
   */

  let t;
  let r, k;

  t = this;
  r = {
    IS_GET: arguments.length < 2 && typeof p !== 'object',
    VALUE: {}
  };

  // StirObject 객체 자기자신을 파싱하는 경우
  // 세션 중 맨 처음 객체만을 받아옵니다.

  if (this instanceof window.STIR.classes.StirObjectSession) {
    t = this.get();
  }

  if (r.IS_GET) {

    // Context 결과가 비어있는 세션에서 속성값을 얻어오려했을 때
    // undefined 를 반환합니다.

    if (!t) {
      r.VALUE = undefined;
      return r;
    }

    // Object.method()
    if (!arguments.length) {
      r.VALUE = getProperties.call(this);
    }
    // Object.method('property')
    else {
      r.VALUE = this[p];
    }

    return r;

  }


  /*
   *  대입하는 매개변수입니다.
   *  대입해야 할 값들을 Object 자료형으로 반환해줍니다.
   * 
   */

  // Object.method('property', 'value')
  if (p instanceof String) p = p.toString();
  if (typeof p === 'string') {
    r.VALUE[p] = v;
  }

  // Object.method({ ... })
  else if (typeof p === 'object') {
    r.VALUE = p;
  }

  return r;
};

function applyArguments(o) {
  for (const p in o) this[p] = o[p];
}

export {
  parseArguments,
  applyArguments,
  getProperties
};