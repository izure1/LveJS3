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
import M__followUpdate from './Objects/__followUpdate';
import M__followUpdateFromObj from './Objects/__followUpdateFromObj';
import M__setInformationElement from './Objects/__setInformationElement';
import M__setInformationText from './Objects/__setInformationText';
import M__setPhysicsBody from './Objects/__setPhysicsBody';



function setCtxAttr(r) {
  setHiddenContext.call(this, 'context', [r]);
}

function setSysAttr(r) {

  setHiddenContext.call(this.__system__, 'proxy', r);
  setHiddenContext.call(this.__system__, 'style', {});
  setHiddenContext.call(this.__system__, 'text', {});
  setHiddenContext.call(this.__system__, 'events', {});
  setHiddenContext.call(this.__system__, 'physics', {});
  setHiddenContext.call(this.__system__, 'suppressJob', new SuppressJob());

  for (let t of DEFAULT_EVENT) {
    this.__system__.events[t] = [];
  }

}

function setHDRAttr(r) {

  // style
  this.style = new DEFAULT_STYLE;
  this.style = getPropertiesProxy.call(this, this.style, PROXY_HANDLER_STYLE);

  // dataset
  this.dataset = new DEFAULT_DATA;
  this.dataset = getPropertiesProxy.call(this, this.dataset, PROXY_HANDLER_DATA);

  // followset
  this.followset = new DEFAULT_FOLLOW;
  this.followset = getPropertiesProxy.call(this, this.followset, PROXY_HANDLER_FOLLOW);

  // spriteset
  this.spriteset = new DEFAULT_SPRITE;
  this.spriteset = getPropertiesProxy.call(this, this.spriteset, PROXY_HANDLER_SPRITE);

}




class LveJSObject extends LveJSObjectSession {

  constructor(w, u) {

    let r;
    super(w, u);

    // 객체의 속성 수정을 감지할 수 있는 새로운 프록시 객체를 만듭니다.
    // 이 프록시 객체가 해시테이블에 스택으로 존재하며, 실제 객체는 레퍼런스 변수로서만 남습니다.
    r = Object.assign(this, new DEFAULT_ATTRIBUTE);
    r = getPropertiesProxy.call(this, r, PROXY_HANDLER_ATTRIBUTE);

    setCtxAttr.call(this, r);
    setSysAttr.call(this, r);
    setHDRAttr.call(this, r);

    return r;

  }

}


LveJSObject.prototype.__fireReservation = M__fireReservation;
LveJSObject.prototype.__animationUpdate = M__animationUpdate;
LveJSObject.prototype.__draw = M__draw;
LveJSObject.prototype.__followUpdate = M__followUpdate;
LveJSObject.prototype.__followUpdateFromObj = M__followUpdateFromObj;
LveJSObject.prototype.__setInformationElement = M__setInformationElement;
LveJSObject.prototype.__setInformationText = M__setInformationText;
LveJSObject.prototype.__setPhysicsBody = M__setPhysicsBody;

export default LveJSObject;