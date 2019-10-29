import setHiddenContext from './Utils/setHiddenContext'

import MAddClass from './Methods/addClass'
import MAnimate from './Methods/animate'
import MAttr from './Methods/attr'
import MCreate from './Methods/create'
import MCss from './Methods/css'
import MData from './Methods/data'
import MEach from './Methods/each'
import MElement from './Methods/element'
import MEmit from './Methods/emit'
import MFadeIn from './Methods/fadeIn'
import MFadeOut from './Methods/fadeOut'
import MFilter from './Methods/filter'
import MFindClass from './Methods/findClass'
import MFollow from './Methods/follow'
import MFollower from './Methods/follower'
import MFollowing from './Methods/following'
import MForceUpdate from './Methods/forceUpdate'
import MFrom from './Methods/from'
import MGet from './Methods/get'
import MHasClass from './Methods/hasClass'
import MHeight from './Methods/height'
import MIn from './Methods/in'
import MKick from './Methods/kick'
import MLoad from './Methods/load'
import MNotClass from './Methods/notClass'
import MOff from './Methods/off'
import MOn from './Methods/on'
import MOnce from './Methods/once'
import MPause from './Methods/pause'
import MPhysicsUpdate from './Methods/physicsUpdate'
import MPlay from './Methods/play'
import MReady from './Methods/ready'
import MRemove from './Methods/remove'
import MRemoveClass from './Methods/removeClass'
import MSprite from './Methods/sprite'
import MParticle from './Methods/particle'
import MStop from './Methods/stop'
import MToggleClass from './Methods/toggleClass'
import MToString from './Methods/toString'
import MTransition from './Methods/transition'
import MUnfollow from './Methods/unfollow'
import MUse from './Methods/use'
import MWidth from './Methods/width'

// Physics
import MApplyForce from './Methods/applyForce'
import MApplyLinearImpulse from './Methods/applyLinearImpulse'
import MApplyAngularImpulse from './Methods/applyAngularImpulse'
import MGetLinearVelocity from './Methods/getLinearVelocity'
import MGetAngularVelocity from './Methods/getAngularVelocity'
import MSetLinearVelocity from './Methods/setLinearVelocity'
import MSetAngularVelocity from './Methods/setAngularVelocity'
import MGetPhysicsBody from './Methods/getPhysicsBody'



function setDefAttr(w, u, c) {

  setHiddenContext.call(this, 'name', u)
  setHiddenContext.call(this, 'context', c, {
    configurable: true
  })

}

function setSysAttr(w, u, c) {

  setHiddenContext.call(this, '__system__', {})
  setHiddenContext.call(this.__system__, 'world', w)

  Object.defineProperty(this, 'length', {

    get() {
      return this.context.length
    }

  })

}


class LveJSObjectSession {

  /* u = 사용자가 검색하고자 하는 객체의 name (String type)
   * c = 검색된 객체 리스트 (Array type)
   */
  constructor(w, u, c = []) {

    setDefAttr.apply(this, arguments)
    setSysAttr.apply(this, arguments)

  }

}


LveJSObjectSession.prototype.addClass = MAddClass
LveJSObjectSession.prototype.animate = MAnimate
LveJSObjectSession.prototype.attr = MAttr
LveJSObjectSession.prototype.create = MCreate
LveJSObjectSession.prototype.css = MCss
LveJSObjectSession.prototype.data = MData
LveJSObjectSession.prototype.each = MEach
LveJSObjectSession.prototype.element = MElement
LveJSObjectSession.prototype.emit = MEmit
LveJSObjectSession.prototype.fadeIn = MFadeIn
LveJSObjectSession.prototype.fadeOut = MFadeOut
LveJSObjectSession.prototype.filter = MFilter
LveJSObjectSession.prototype.findClass = MFindClass
LveJSObjectSession.prototype.follow = MFollow
LveJSObjectSession.prototype.follower = MFollower
LveJSObjectSession.prototype.following = MFollowing
LveJSObjectSession.prototype.forceUpdate = MForceUpdate
LveJSObjectSession.prototype.from = MFrom
LveJSObjectSession.prototype.get = MGet
LveJSObjectSession.prototype.hasClass = MHasClass
LveJSObjectSession.prototype.height = MHeight
LveJSObjectSession.prototype.in = MIn
LveJSObjectSession.prototype.kick = MKick
LveJSObjectSession.prototype.load = MLoad
LveJSObjectSession.prototype.notClass = MNotClass
LveJSObjectSession.prototype.off = MOff
LveJSObjectSession.prototype.on = MOn
LveJSObjectSession.prototype.once = MOnce
LveJSObjectSession.prototype.pause = MPause
LveJSObjectSession.prototype.physicsUpdate = MPhysicsUpdate
LveJSObjectSession.prototype.play = MPlay
LveJSObjectSession.prototype.ready = MReady
LveJSObjectSession.prototype.remove = MRemove
LveJSObjectSession.prototype.removeClass = MRemoveClass
LveJSObjectSession.prototype.sprite = MSprite
LveJSObjectSession.prototype.particle = MParticle
LveJSObjectSession.prototype.stop = MStop
LveJSObjectSession.prototype.toggleClass = MToggleClass
LveJSObjectSession.prototype.toString = MToString
LveJSObjectSession.prototype.transition = MTransition
LveJSObjectSession.prototype.unfollow = MUnfollow
LveJSObjectSession.prototype.use = MUse
LveJSObjectSession.prototype.width = MWidth

LveJSObjectSession.prototype.applyForce = MApplyForce
LveJSObjectSession.prototype.applyLinearImpulse = MApplyLinearImpulse
LveJSObjectSession.prototype.applyAngularImpulse = MApplyAngularImpulse
LveJSObjectSession.prototype.getLinearVelocity = MGetLinearVelocity
LveJSObjectSession.prototype.getAngularVelocity = MGetAngularVelocity
LveJSObjectSession.prototype.setLinearVelocity = MSetLinearVelocity
LveJSObjectSession.prototype.setAngularVelocity = MSetAngularVelocity
LveJSObjectSession.prototype.getPhysicsBody = MGetPhysicsBody


export default LveJSObjectSession