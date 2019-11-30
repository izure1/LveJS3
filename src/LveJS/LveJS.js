import {
  version
} from '../../package.json'

import LveJSObjectSession from './LveJSObjectSession'
import LveJSObject from './LveJSObject'
import LveJSVector from './LveJSVector'
import Box2D from '../External/Box2D/Box2D'

import LveJSHashTable from './Managers/LveJSHashTable'
import LveJSRenderer from './Managers/LveJSRenderer'
import LveJSPhysics from './Managers/LveJSPhysics'
import LveJSEmitter from './Managers/LveJSEmitter'
import LveJSElementListener from './Managers/LveJSElementListener'
import LveJSElementObserver from './Managers/LveJSElementObserver'
import LveJSAnimator from './Managers/LveJSAnimator'
import LveJSAssetManager from './Managers/LveJSAssetManager'
import LveJSInputListener from './Managers/LveJSInputListener'
import LveJSParticleEmitter from './Managers/LveJSParticleEmitter'
import LveJSSpriteManager from './Managers/LveJSSpriteManager'
import LveJSCache from './Managers/LveJSCache'

import LveQuery from './LveQuery'

import SuppressJob from './Utils/SuppressJob'
import WaitReady from './Utils/WaitReady'

// Functions
import FnInstanceOf from './Functions/instanceof'
import FnCheckMobile from './Functions/checkMobile'
import FnCurrent from './Functions/current'
import FnDestroy from './Functions/destroy'
import FnReady from './Functions/ready'
import FnInit from './Functions/init'
import FnStart from './Functions/start'
import FnExtend from './Functions/extend'
import FnExtendStart from './Functions/extendStart'
import FnExtendEnd from './Functions/extendEnd'
import FnExtendDrawStart from './Functions/extendDrawStart'
import FnExtendDrawEnd from './Functions/extendDrawEnd'
import FnPlay from './Functions/play'
import FnPause from './Functions/pause'
import FnCapture from './Functions/capture'
import FnOn from './Functions/on'
import FnOnce from './Functions/once'
import FnOff from './Functions/off'
import FnCreateObject from './Functions/createObject'
import FnGetRenderStates from './Functions/getRenderStates'
import FnGetMouseCoords from './Functions/getMouseCoords'
import FnRequestCaching from './Functions/requestCaching'
import FnBox2d from './Functions/box2d'
import FnGetGravity from './Functions/getGravity'
import FnSetGravity from './Functions/setGravity'
import FnSave from './Functions/save'
import FnRestore from './Functions/restore'
import FnFullScreen from './Functions/fullScreen'
import FnExitFullScreen from './Functions/exitFullScreen'
import FnToggleFullScreen from './Functions/toggleFullScreen'
import FnIsFullScreen from './Functions/isFullScreen'
import FnCalc from './Functions/calc'
import FnCalcRatio from './Functions/calcRatio'
import FnLoadAsset from './Functions/loadAsset'
import FnGetAsset from './Functions/getAsset'
import FnCreateCollider from './Functions/createCollider'
import FnCreateSprite from './Functions/createSprite'
import FnGetColliders from './Functions/getColliders'
import FnGetSprites from './Functions/getSprites'
import FnExists from './Functions/exists'
import FnGetAssetBlob from './Functions/getAssetBlob'
import FnGetBaseURL from './Functions/getBaseURL'
import FnSetBaseURL from './Functions/setBaseURL'


const CLASSES = {
  LveJSObjectSession,
  LveJSObject,
  LveJSVector,
  Box2D
}

function LveJS() {

  this.renderer = new LveJSRenderer
  this.physics = new LveJSPhysics
  this.emitter = new LveJSEmitter
  this.animator = new LveJSAnimator
  this.assetManager = new LveJSAssetManager
  this.particleEmitter = new LveJSParticleEmitter
  this.spriteManager = new LveJSSpriteManager

  this.keyboardListener = new LveJSInputListener
  this.mouseListener = new LveJSInputListener
  this.canvasListener = new LveJSElementListener
  this.canvasObserver = new LveJSElementObserver

  this.hashTable = new LveJSHashTable
  this.suppressJob = new SuppressJob
  this.worldReady = new WaitReady
  this.cache = new LveJSCache

  this.classes = CLASSES

  let self = this
  this.lve = function (u = null) {

    return new LveJSObjectSession(self, u, LveQuery.call(self, u))

  }



  // Set LveJS Functions for user
  this.lve.instanceof = FnInstanceOf.bind(this)
  this.lve.checkMobile = FnCheckMobile.bind(this)
  this.lve.destroy = FnDestroy.bind(this)
  this.lve.ready = FnReady.bind(this)
  this.lve.init = FnInit.bind(this)
  this.lve.start = FnStart.bind(this)
  this.lve.extend = FnExtend.bind(this)
  this.lve.extendStart = FnExtendStart.bind(this)
  this.lve.extendEnd = FnExtendEnd.bind(this)
  this.lve.extendDrawStart = FnExtendDrawStart.bind(this)
  this.lve.extendDrawEnd = FnExtendDrawEnd.bind(this)
  this.lve.play = FnPlay.bind(this)
  this.lve.pause = FnPause.bind(this)
  this.lve.capture = FnCapture.bind(this)
  this.lve.on = FnOn.bind(this)
  this.lve.once = FnOnce.bind(this)
  this.lve.off = FnOff.bind(this)
  this.lve.createObject = FnCreateObject.bind(this)
  this.lve.getRenderStates = FnGetRenderStates.bind(this)
  this.lve.getMouseCoords = FnGetMouseCoords.bind(this)
  this.lve.requestCaching = FnRequestCaching.bind(this)
  this.lve.box2d = FnBox2d.bind(this)
  this.lve.getGravity = FnGetGravity.bind(this)
  this.lve.setGravity = FnSetGravity.bind(this)
  this.lve.save = FnSave.bind(this)
  this.lve.restore = FnRestore.bind(this)
  this.lve.fullscreen = this.lve.fullScreen = FnFullScreen.bind(this)
  this.lve.exitFullscreen = this.lve.exitFullScreen = FnExitFullScreen.bind(this)
  this.lve.toggleFullscreen = this.lve.toggleFullScreen = FnToggleFullScreen.bind(this)
  this.lve.isFullscreen = this.lve.isFullScreen = FnIsFullScreen.bind(this)
  this.lve.calc = FnCalc.bind(this)
  this.lve.calcRatio = FnCalcRatio.bind(this)
  this.lve.loadAsset = FnLoadAsset.bind(this)
  this.lve.getAsset = FnGetAsset.bind(this)
  this.lve.createCollider = FnCreateCollider.bind(this)
  this.lve.createSprite = FnCreateSprite.bind(this)
  this.lve.getColliders = FnGetColliders.bind(this)
  this.lve.getSprites = FnGetSprites.bind(this)
  this.lve.exists = FnExists.bind(this)
  this.lve.getAssetBlob = FnGetAssetBlob.bind(this)
  this.lve.getBaseURL = FnGetBaseURL.bind(this)
  this.lve.setBaseURL = FnSetBaseURL.bind(this)

  this.lve.current = FnCurrent.call(this)



  /*
   *
   * Define static properties
   * 
   */
  Object.defineProperties(this, {

    'version': {
      get() {
        return version
      }
    },

    'canvas': {
      get() {
        return this.renderer.setting.canvas.element
      }
    }

  })

  /*
   *
   * end define properties
   * 
   */

  if (this instanceof LveJS) return this.lve
  else {
    throw 'Class constructor a cannot be invoked without \'new\''
  }

}


Object.defineProperty(LveJS, 'CLASS', {
  get() {
    return CLASSES
  }
})

export default LveJS