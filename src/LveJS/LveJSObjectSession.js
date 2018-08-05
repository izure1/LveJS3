import setHiddenContext from './Utils/setHiddenContext';

import MAddClass from './Objects/addClass';
import MAnimate from './Objects/animate';
import MAttr from './Objects/attr';
import MCreate from './Objects/create';
import MCss from './Objects/css';
import MData from './Objects/data';
import MEach from './Objects/each';
import MElement from './Objects/element';
import MEmit from './Objects/emit';
import MFilter from './Objects/filter';
import MFindClass from './Objects/findClass';
import MFollow from './Objects/follow';
import MFollower from './Objects/follower';
import MFollowing from './Objects/following';
import MFrom from './Objects/from';
import MGet from './Objects/get';
import MHasClass from './Objects/hasClass';
import MHeight from './Objects/height';
import MIn from './Objects/in';
import MKick from './Objects/kick';
import MNotClass from './Objects/notClass';
import MOff from './Objects/off';
import MOn from './Objects/on';
import MPause from './Objects/pause';
import MPlay from './Objects/play';
import MReady from './Objects/ready';
import MRemove from './Objects/remove';
import MRemoveClass from './Objects/removeClass';
import MStop from './Objects/stop';
import MToggleClass from './Objects/toggleClass';
import MUnfollow from './Objects/unfollow';
import MUse from './Objects/use';
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

  Object.defineProperty(this, 'length', {

    get() {
      return this.context.length;
    }

  });

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
LveJSObjectSession.prototype.data = MData;
LveJSObjectSession.prototype.each = MEach;
LveJSObjectSession.prototype.element = MElement;
LveJSObjectSession.prototype.emit = MEmit;
LveJSObjectSession.prototype.filter = MFilter;
LveJSObjectSession.prototype.findClass = MFindClass;
LveJSObjectSession.prototype.follow = MFollow;
LveJSObjectSession.prototype.follower = MFollower;
LveJSObjectSession.prototype.following = MFollowing;
LveJSObjectSession.prototype.from = MFrom;
LveJSObjectSession.prototype.get = MGet;
LveJSObjectSession.prototype.hasClass = MHasClass;
LveJSObjectSession.prototype.height = MHeight;
LveJSObjectSession.prototype.in = MIn;
LveJSObjectSession.prototype.kick = MKick;
LveJSObjectSession.prototype.notClass = MNotClass;
LveJSObjectSession.prototype.off = MOff;
LveJSObjectSession.prototype.on = MOn;
LveJSObjectSession.prototype.pause = MPause;
LveJSObjectSession.prototype.play = MPlay;
LveJSObjectSession.prototype.ready = MReady;
LveJSObjectSession.prototype.remove = MRemove;
LveJSObjectSession.prototype.removeClass = MRemoveClass;
LveJSObjectSession.prototype.stop = MStop;
LveJSObjectSession.prototype.toggleClass = MToggleClass;
LveJSObjectSession.prototype.unfollow = MUnfollow;
LveJSObjectSession.prototype.use = MUse;
LveJSObjectSession.prototype.width = MWidth;

export default LveJSObjectSession;