import setHiddenContext from './Utils/setHiddenContext';
import SuppressJob from './Utils/SuppressJob';

import LveJSObjectSession from './LveJSObjectSession';
import getPropertiesProxy from './Utils/getPropertiesProxy';

import DEFAULT_ATTRIBUTE from './Objects/Vars/DEFAULT_ATTRIBUTE';
import DEFAULT_STYLE from './Objects/Vars/DEFAULT_STYLE';
import DEFAULT_EVENT from './Objects/Vars/DEFAULT_EVENT';
import DEFAULT_DATA from './Objects/Vars/DEFAULT_DATA';
import DEFAULT_FOLLOW from './Objects/Vars/DEFAULT_FOLLOW';
import DEFAULT_SPRITE from './Objects/Vars/DEFAULT_SPRITE';

import PROXY_HANDLER_ATTRIBUTE from './Objects/Vars/PROXY_HANDLER.ATTRIBUTE';
import PROXY_HANDLER_STYLE from './Objects/Vars/PROXY_HANDLER.STYLE';
import PROXY_HANDLER_DATA from './Objects/Vars/PROXY_HANDLER.DATA';
import PROXY_HANDLER_FOLLOW from './Objects/Vars/PROXY_HANDLER.FOLLOW';
import PROXY_HANDLER_SPRITE from './Objects/Vars/PROXY_HANDLER.SPRITE';

import M__fireReservation from './Objects/__fireReservation';
import M__animationUpdate from './Objects/__animationUpdate';
import M__draw from './Objects/__draw';
import M__setInformation_image from './Objects/__setInformation_image';
import M__setInformation_text from './Objects/__setInformation_text';



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

function setHDRAttr() {

  // style
  this.style = JSON.parse(JSON.stringify(DEFAULT_STYLE));
  this.style = getPropertiesProxy.call(this, this.style, PROXY_HANDLER_STYLE);

  // dataset
  this.dataset = JSON.parse(JSON.stringify(DEFAULT_DATA));
  this.dataset = getPropertiesProxy.call(this, this.dataset, PROXY_HANDLER_DATA);

  // followset
  this.followset = JSON.parse(JSON.stringify(DEFAULT_FOLLOW));
  this.followset = getPropertiesProxy.call(this, this.followset, PROXY_HANDLER_FOLLOW);

  // spriteset
  this.spriteset = JSON.parse(JSON.stringify(DEFAULT_SPRITE));
  this.spriteset = getPropertiesProxy.call(this, this.spriteset, PROXY_HANDLER_SPRITE);

}




class LveJSObject extends LveJSObjectSession {

  constructor(w, u) {

    let r;
    super(w, u);

    // 객체의 속성 수정을 감지할 수 있는 새로운 프록시 객체를 만듭니다.
    // 이 프록시 객체가 해시테이블에 스택으로 존재하며, 실제 객체는 레퍼런스 변수로서만 남습니다.
    r = JSON.stringify(DEFAULT_ATTRIBUTE);
    r = JSON.parse(r);
    r = Object.assign(this, r);
    r = getPropertiesProxy.call(this, r, PROXY_HANDLER_ATTRIBUTE);

    setCtxAttr.apply(r, arguments);
    setSysAttr.apply(r, arguments);
    setHDRAttr.apply(r, arguments);

    return r;

  }

}


LveJSObject.prototype.__fireReservation = M__fireReservation;
LveJSObject.prototype.__animationUpdate = M__animationUpdate;
LveJSObject.prototype.__draw = M__draw;
LveJSObject.prototype.__setInformation_image = M__setInformation_image;
LveJSObject.prototype.__setInformation_text = M__setInformation_text;

export default LveJSObject;