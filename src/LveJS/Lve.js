import LveJSObjectSession from './LveJSObjectSession';
import LveJSObject from './LveJSObject';
import Box2D from '../External/Box2D/Box2D';

import LveJSHashTable from './Managers/LveJSHashTable';
import LveJSRenderer from './Managers/LveJSRenderer';
import LveJSPhysics from './Managers/LveJSPhysics';
import LveJSEmitter from './Managers/LveJSEmitter';
import LveJSListener from './Managers/LveJSListener';
import LveJSCache from './Managers/LveJSCache';

import LveQuery from './LveQuery';

import SuppressJob from './Utils/SuppressJob';

// Functions
import FnInstanceOf from './Functions/instanceof';
import FnCheckMobile from './Functions/checkMobile';
import FnCurrent from './Functions/current';
import FnDestroy from './Functions/destroy';
import FnReady from './Functions/ready';
import FnInit from './Functions/init';
import FnStart from './Functions/start';
import FnExtend from './Functions/extend';
import FnPlay from './Functions/play';
import FnPause from './Functions/pause';
import FnCapture from './Functions/capture';
import FnOn from './Functions/on';
import FnOnce from './Functions/once';
import FnOff from './Functions/off';
import FnRequestCaching from './Functions/requestCaching';
import FnBox2d from './Functions/box2d';
import FnSetGravity from './Functions/setGravity';


function Lve() {

  this.renderer = new LveJSRenderer;
  this.physics = new LveJSPhysics;
  this.emitter = new LveJSEmitter;
  this.listener = new LveJSListener;

  this.hashTable = new LveJSHashTable;
  this.suppressJob = new SuppressJob;
  this.cache = new LveJSCache;
  this.queue = [];

  this.version = '3.0.2';
  this.classes = {
    LveJSObjectSession,
    LveJSObject,
    Box2D
  };

  let self = this;
  this.lve = function (u = null) {

    return new LveJSObjectSession(self, u, LveQuery.call(self, u));

  };



  // Set LveJS Functions for user
  this.lve.instanceof = FnInstanceOf.bind(this);
  this.lve.checkMobile = FnCheckMobile.bind(this);
  this.lve.destroy = FnDestroy.bind(this);
  this.lve.ready = FnReady.bind(this);
  this.lve.init = FnInit.bind(this);
  this.lve.start = FnStart.bind(this);
  this.lve.extend = FnExtend.bind(this);
  this.lve.play = FnPlay.bind(this);
  this.lve.pause = FnPause.bind(this);
  this.lve.capture = FnCapture.bind(this);
  this.lve.on = FnOn.bind(this);
  this.lve.once = FnOnce.bind(this);
  this.lve.off = FnOff.bind(this);
  this.lve.requestCaching = FnRequestCaching.bind(this);
  this.lve.box2d = FnBox2d.bind(this);
  this.lve.setGravity = FnSetGravity.bind(this);

  this.lve.current = FnCurrent.call(this);



  /*
   *
   * end define properties
   * 
   */

  if (this instanceof Lve) return this.lve;
  else {
    throw 'Class constructor a cannot be invoked without \'new\'';
  }

}

export default Lve;