import setHiddenContext from './Utils/setHiddenContext'
import SuppressJob from './Utils/SuppressJob'

import LveJSObjectSession from './LveJSObjectSession'
import LveJSTransition from './LveJSTransition'
import getPropertiesProxy from './Utils/getPropertiesProxy'

import DEFAULT_ATTRIBUTE from './Methods/Vars/DEFAULT_ATTRIBUTE'
import DEFAULT_STYLE from './Methods/Vars/DEFAULT_STYLE'
import DEFAULT_EVENT from './Methods/Vars/DEFAULT_EVENT'
import DEFAULT_DATA from './Methods/Vars/DEFAULT_DATA'
import DEFAULT_FOLLOW from './Methods/Vars/DEFAULT_FOLLOW'
import DEFAULT_SPRITE from './Methods/Vars/DEFAULT_SPRITE'
import DEFAULT_PHYSICS from './Methods/Vars/DEFAULT_PHYSICS'
import DEFAULT_VIDEO from './Methods/Vars/DEFAULT_VIDEO'

import PROXY_HANDLER_ATTRIBUTE from './Methods/Vars/PROXY_HANDLER.ATTRIBUTE'
import PROXY_HANDLER_STYLE from './Methods/Vars/PROXY_HANDLER.STYLE'
import PROXY_HANDLER_DATA from './Methods/Vars/PROXY_HANDLER.DATA'
import PROXY_HANDLER_FOLLOW from './Methods/Vars/PROXY_HANDLER.FOLLOW'
import PROXY_HANDLER_SPRITE from './Methods/Vars/PROXY_HANDLER.SPRITE'
import PROXY_HANDLER_PHYSICS from './Methods/Vars/PROXY_HANDLER.PHYSICS'
import PROXY_HANDLER_VIDEO from './Methods/Vars/PROXY_HANDLER.VIDEO'

import M__draw from './Methods/draw'
import M__animationUpdate from './Methods/__animationUpdate'
import M__spriteUpdate from './Methods/__spriteUpdate'
import M__isDisplay from './Methods/__isDisplay'
import M__followUpdate from './Methods/__followUpdate'
import M__followUpdateFromObj from './Methods/__followUpdateFromObj'
import M__setAudioMute from './Methods/__setAudioMute'
import M__setInformationElement from './Methods/__setInformationElement'
import M__setInformationText from './Methods/__setInformationText'
import M__setInformationSprite from './Methods/__setInformationSprite'
import M__setTimescaleElement from './Methods/__setTimescaleElement'
import M__setElementEvent from './Methods/__setElementEvent'
import M__setPhysicsBody from './Methods/__setPhysicsBody'
import M__setPhysicsDestroy from './Methods/__setPhysicsDestroy'
import M__setPhysicsFixture from './Methods/__setPhysicsFixture'
import M__setPhysicsActive from './Methods/__setPhysicsActive'
import M__setPhysicsFreeze from './Methods/__setPhysicsFreeze'
import M__setPhysicsDensity from './Methods/__setPhysicsDensity'
import M__setPhysicsTransform from './Methods/__setPhysicsTransform'
import M__transitionUpdate from './Methods/__transitionUpdate'
import M__physicsUpdate from './Methods/__physicsUpdate'



function setCtxAttr(r) {
  setHiddenContext.call(this, 'context', [r])
}

function setSysAttr(r) {

  let writable = {
    writable: true
  }

  setHiddenContext.call(this.__system__, 'proxy', r)
  setHiddenContext.call(this.__system__, 'style', {})
  setHiddenContext.call(this.__system__, 'text', {})
  setHiddenContext.call(this.__system__, 'events', {})
  setHiddenContext.call(this.__system__, 'sprite', {})
  setHiddenContext.call(this.__system__, 'position', {})
  setHiddenContext.call(this.__system__, 'physics', {})
  setHiddenContext.call(this.__system__.physics, 'information', {})
  setHiddenContext.call(this.__system__, 'audio', {})
  setHiddenContext.call(this.__system__, 'suppressJob', new SuppressJob)
  setHiddenContext.call(this.__system__, 'transition', new LveJSTransition)

  this.__system__.sprite.interval = 0
  this.__system__.sprite.duration = 0
  this.__system__.position.x = 0
  this.__system__.position.y = 0

  for (let t of DEFAULT_EVENT) {
    this.__system__.events[t] = new Map
  }

  this.__system__.physics.force = true

}

function setHDRAttr(r) {

  // style
  this.style = new DEFAULT_STYLE
  this.style = getPropertiesProxy.call(this, this.style, PROXY_HANDLER_STYLE)

  // dataset
  this.dataset = new DEFAULT_DATA
  this.dataset = getPropertiesProxy.call(this, this.dataset, PROXY_HANDLER_DATA)

  // followset
  this.followset = new DEFAULT_FOLLOW
  this.followset = getPropertiesProxy.call(this, this.followset, PROXY_HANDLER_FOLLOW)

  // spriteset
  this.spriteset = new DEFAULT_SPRITE
  this.spriteset = getPropertiesProxy.call(this, this.spriteset, PROXY_HANDLER_SPRITE)

  // physicsset
  this.physicsset = new DEFAULT_PHYSICS
  this.physicsset = getPropertiesProxy.call(this, this.physicsset, PROXY_HANDLER_PHYSICS)

  // videoset
  this.videoset = new DEFAULT_VIDEO
  this.videoset = getPropertiesProxy.call(this, this.videoset, PROXY_HANDLER_VIDEO)

}




class LveJSObject extends LveJSObjectSession {

  constructor(w, u) {

    let r
    super(w, u)

    // 객체의 속성 수정을 감지할 수 있는 새로운 프록시 객체를 만듭니다.
    // 이 프록시 객체가 해시테이블에 스택으로 존재하며, 실제 객체는 레퍼런스 변수로서만 남습니다.
    r = Object.assign(this, new DEFAULT_ATTRIBUTE)
    r = getPropertiesProxy.call(this, r, PROXY_HANDLER_ATTRIBUTE)

    setCtxAttr.call(this, r)
    setSysAttr.call(this, r)
    setHDRAttr.call(this, r)

    return r

  }

}


LveJSObject.prototype.draw = M__draw
LveJSObject.prototype.__animationUpdate = M__animationUpdate
LveJSObject.prototype.__spriteUpdate = M__spriteUpdate
LveJSObject.prototype.__isDisplay = M__isDisplay
LveJSObject.prototype.__followUpdate = M__followUpdate
LveJSObject.prototype.__followUpdateFromObj = M__followUpdateFromObj
LveJSObject.prototype.__setAudioMute = M__setAudioMute
LveJSObject.prototype.__setInformationElement = M__setInformationElement
LveJSObject.prototype.__setInformationText = M__setInformationText
LveJSObject.prototype.__setInformationSprite = M__setInformationSprite
LveJSObject.prototype.__setTimescaleElement = M__setTimescaleElement
LveJSObject.prototype.__setElementEvent = M__setElementEvent
LveJSObject.prototype.__setPhysicsBody = M__setPhysicsBody
LveJSObject.prototype.__setPhysicsDestroy = M__setPhysicsDestroy
LveJSObject.prototype.__setPhysicsFixture = M__setPhysicsFixture
LveJSObject.prototype.__setPhysicsActive = M__setPhysicsActive
LveJSObject.prototype.__setPhysicsFreeze = M__setPhysicsFreeze
LveJSObject.prototype.__setPhysicsDensity = M__setPhysicsDensity
LveJSObject.prototype.__setPhysicsTransform = M__setPhysicsTransform
LveJSObject.prototype.__transitionUpdate = M__transitionUpdate
LveJSObject.prototype.__physicsUpdate = M__physicsUpdate

export default LveJSObject