import setHiddenContext from './Utils/setHiddenContext';

import MCreate from './Objects/create';
import MEach from './Objects/each';
import MGet from './Objects/get';
import MGetEasingData from './Objects/getEasingData';



function setDefAttr(w, u, c) {

  setHiddenContext.call(this, 'name', u);
  setHiddenContext.call(this, 'context', c, {
    configurable: true
  });

}

function setSysAttr(w, u, c) {

  setHiddenContext.call(this, '__system__', {});
  setHiddenContext.call(this.__system__, 'world', w);

}


class LveJSObjectSession {

  /* u = 사용자가 검색하고자 하는 객체의 name (String type)
   * c = 검색된 객체 리스트 (Array type)
   */
  constructor(w, u, c = []) {

    setDefAttr.apply(this, arguments);
    setSysAttr.apply(this, arguments);

  }

}


LveJSObjectSession.prototype.create = MCreate;
LveJSObjectSession.prototype.each = MEach;
LveJSObjectSession.prototype.get = MGet;
LveJSObjectSession.prototype.getEasingData = MGetEasingData;

export default LveJSObjectSession;