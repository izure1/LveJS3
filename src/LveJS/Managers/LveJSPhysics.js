import DeltaTimer from '../Utils/DeltaTimer'

import B from '../../External/Box2D/Box2D'
import DEFAULT_SETTING from './Physics/Vars/DEFAULT_SETTING'

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


class LveJSPhysics {

  constructor() {

    this.setting = new DEFAULT_SETTING
    this.map = new WeakMap

    this.box2d = B()
    this.world = new this.box2d.b2World(new this.box2d.b2Vec2(0, this.setting.gravity), false)
    this.bodies = new Set
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


export default LveJSPhysics