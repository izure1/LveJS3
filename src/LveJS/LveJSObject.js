import setHiddenContext from './Utils/setHiddenContext';

import LveJSObjectSession from './LveJSObjectSession';
import getPropertiesProxy from './Utils/getPropertiesProxy';

import DEFAULT_ATTRIBUTE from './Objects/Vars/DEFAULT_ATTRIBUTE';
import DEFAULT_STYLE from './Objects/Vars/DEFAULT_STYLE';
import DEFAULT_EVENT from './Objects/Vars/DEFAULT_EVENT';

import PROXY_HANDLER_ATTRIBUTE from './Objects/Vars/PROXY_HANDLER.ATTRIBUTE';
import PROXY_HANDLER_STYLE from './Objects/Vars/PROXY_HANDLER.STYLE';




function getProxy() {
  let t;

  t = Object.assign(this, DEFAULT_ATTRIBUTE);
  t = getPropertiesProxy.call(t, t, PROXY_HANDLER_ATTRIBUTE);
  return t;
}

function setCtxAttr() {
  setHiddenContext.call(this, 'context', [this]);
}

function setSysAttr() {

  let o;

  o = {
    enumerable: true
  };

  setHiddenContext.call(this.__system__, 'proxy', this);
  setHiddenContext.call(this.__system__, 'style', {}, o);
  setHiddenContext.call(this.__system__, 'animation', {}, o);
  setHiddenContext.call(this.__system__, 'follow', {}, o);
  setHiddenContext.call(this.__system__, 'sprite', {}, o);
  setHiddenContext.call(this.__system__, 'data', {}, o);
  setHiddenContext.call(this.__system__, 'text', {});
  setHiddenContext.call(this.__system__, 'events', {});

  for (let t of DEFAULT_EVENT) {
    setHiddenContext.call(this.__system__.events, t, [], o);
  }

}

function setCSSAttr() {
  this.style = Object.assign({}, DEFAULT_STYLE);
  this.style = getPropertiesProxy.call(this, this.style, PROXY_HANDLER_STYLE);
}




class LveJSObject extends LveJSObjectSession {

  constructor(w, u) {

    let t;
    super(w, u);

    // 객체의 속성 수정을 감지할 수 있는 새로운 프록시 객체를 만듭니다.
    // 이 프록시 객체가 해시테이블에 스택으로 존재하며, 실제 객체는 레퍼런스 변수로서만 남습니다.
    t = getProxy.apply(this, arguments)

    setCtxAttr.apply(t, arguments);
    setSysAttr.apply(t, arguments);
    setCSSAttr.apply(t, arguments);

    return t;

  }

}

export default LveJSObject;