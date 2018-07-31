import setHiddenContext from './Utils/setHiddenContext';
import SuppressJob from './Utils/SuppressJob';

import LveJSObjectSession from './LveJSObjectSession';
import getPropertiesProxy from './Utils/getPropertiesProxy';

import DEFAULT_ATTRIBUTE from './Objects/Vars/DEFAULT_ATTRIBUTE';
import DEFAULT_STYLE from './Objects/Vars/DEFAULT_STYLE';
import DEFAULT_EVENT from './Objects/Vars/DEFAULT_EVENT';

import PROXY_HANDLER_ATTRIBUTE from './Objects/Vars/PROXY_HANDLER.ATTRIBUTE';
import PROXY_HANDLER_STYLE from './Objects/Vars/PROXY_HANDLER.STYLE';

import M__fireReservation from './Objects/__fireReservation';
import M__animationUpdate from './Objects/__animationUpdate';
import M__draw from './Objects/__draw';
import M__setInformation_image from './Objects/__setInformation_image';
import M__setInformation_text from './Objects/__setInformation_text';




function getProxy() {
  let t;
  t = JSON.parse(JSON.stringify(DEFAULT_ATTRIBUTE));
  t = Object.assign(this, t);
  t = getPropertiesProxy.call(t, t, PROXY_HANDLER_ATTRIBUTE);
  return t;
}

function setCtxAttr() {
  setHiddenContext.call(this, 'context', [this]);
}

function setSysAttr() {

  setHiddenContext.call(this.__system__, 'proxy', this);
  setHiddenContext.call(this.__system__, 'style', {});
  setHiddenContext.call(this.__system__, 'text', {});
  setHiddenContext.call(this.__system__, 'events', {});
  setHiddenContext.call(this.__system__, 'physics', {});
  setHiddenContext.call(this.__system__, 'suppressJob', new SuppressJob());

  for (let t of DEFAULT_EVENT) {
    this.__system__.events[t] = [];
  }

}

function setCSSAttr() {
  this.style = JSON.parse(JSON.stringify(DEFAULT_STYLE));
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


LveJSObject.prototype.__fireReservation = M__fireReservation;
LveJSObject.prototype.__animationUpdate = M__animationUpdate;
LveJSObject.prototype.__draw = M__draw;
LveJSObject.prototype.__setInformation_image = M__setInformation_image;
LveJSObject.prototype.__setInformation_text = M__setInformation_text;

export default LveJSObject;