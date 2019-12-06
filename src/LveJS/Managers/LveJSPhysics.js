import WaitReady from '../Utils/WaitReady'

import Box2D from '../../External/Box2D/Box2D'
import DEFAULT_SETTING from './Physics/Vars/DEFAULT_SETTING'
import DEFAULT_CONFIG from './Physics/Vars/DEFAULT_CONFIG'

import FnInit from './Physics/init'
import FnStart from './Physics/start'
import FnRun from './Physics/run'
import FnUpdate from './Physics/update'
import FnGetContactListener from './Physics/getContactListener'
import FnCreateObject from './Physics/createObject'
import FnDestroyObject from './Physics/destroyObject'
import FnCreateBody from './Physics/createBody'
import FnCreateFixture from './Physics/createFixture'
import FnCreateCollider from './Physics/createCollider'
import FnOnUpdate from './Physics/onUpdate'


class LveJSPhysics {

  constructor() {

    let box2d = Box2D(new DEFAULT_CONFIG)

    this.setting = new DEFAULT_SETTING
    this.map = new Map

    this.box2d = box2d
    this.world = new box2d.b2World(new box2d.b2Vec2(0, this.setting.gravity), false)
    this.lockRelease = new WaitReady
    this.colliders = new Set

    this.isRunning = false
    this.isStart = false

    this.world.SetContactListener(this.getContactListener())

  }

}


LveJSPhysics.prototype.init = FnInit
LveJSPhysics.prototype.start = FnStart
LveJSPhysics.prototype.run = FnRun
LveJSPhysics.prototype.update = FnUpdate
LveJSPhysics.prototype.getContactListener = FnGetContactListener
LveJSPhysics.prototype.createObject = FnCreateObject
LveJSPhysics.prototype.destroyObject = FnDestroyObject
LveJSPhysics.prototype.createBody = FnCreateBody
LveJSPhysics.prototype.createFixture = FnCreateFixture
LveJSPhysics.prototype.createCollider = FnCreateCollider
LveJSPhysics.prototype.onUpdate = FnOnUpdate


export default LveJSPhysics