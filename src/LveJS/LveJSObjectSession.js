import setHiddenContext from './Utils/setHiddenContext';

import MAddClass from './Objects/addClass';
import MAnimate from './Objects/animate';
import MAttr from './Objects/attr';
import MCreate from './Objects/create';
import MCss from './Objects/css';
import MEach from './Objects/each';
import MEmit from './Objects/emit';
import MFindClass from './Objects/findClass';
import MGet from './Objects/get';
import MGetEasingData from './Objects/getEasingData';
import MHasClass from './Objects/hasClass';
import MHeight from './Objects/height';
import MNotClass from './Objects/notClass';
import MOff from './Objects/off';
import MOn from './Objects/on';
import MRemoveClass from './Objects/removeClass';
import MToggleClass from './Objects/toggleClass';
import MWidth from './Objects/width';



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


LveJSObjectSession.prototype.addClass = MAddClass;
LveJSObjectSession.prototype.animate = MAnimate;
LveJSObjectSession.prototype.attr = MAttr;
LveJSObjectSession.prototype.create = MCreate;
LveJSObjectSession.prototype.css = MCss;
LveJSObjectSession.prototype.each = MEach;
LveJSObjectSession.prototype.emit = MEmit;
LveJSObjectSession.prototype.findClass = MFindClass;
LveJSObjectSession.prototype.get = MGet;
LveJSObjectSession.prototype.getEasingData = MGetEasingData;
LveJSObjectSession.prototype.hasClass = MHasClass;
LveJSObjectSession.prototype.height = MHeight;
LveJSObjectSession.prototype.notClass = MNotClass;
LveJSObjectSession.prototype.off = MOff;
LveJSObjectSession.prototype.on = MOn;
LveJSObjectSession.prototype.removeClass = MRemoveClass;
LveJSObjectSession.prototype.toggleClass = MToggleClass;
LveJSObjectSession.prototype.width = MWidth;

export default LveJSObjectSession;