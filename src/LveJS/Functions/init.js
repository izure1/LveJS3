import domReady from '../Utils/domReady';
import calcValue from '../Helpers/calcValue';


export default function init(o) {

  let d;
  let c;

  d = domReady.call(document, () => {
    this.lve.init(o);
  });

  if (!d) {
    return this.lve;
  }


  o = calcValue.call(null, o, this.renderer.setting);

  this.renderer.init(o);

  if (o.canvas) {

    if (typeof o.canvas === 'string') c = document.querySelector(o.canvas);
    if (o.canvas instanceof HTMLCanvasElement) {
      c = o.canvas;
    }

    this.renderer.setting.canvas.context = c.getContext('2d');
    this.renderer.setting.canvas.element = c;

  }

  
  lve.root.fn.canvasReset();
  // 사용자 보조 선언
  initSetting.userExtendStart = data.extendStart || initSetting.userExtendStart;
  initSetting.userExtendEnd = data.extendEnd || initSetting.userExtendEnd;
  initSetting.userExtendDrawStart = data.extendDrawStart || initSetting.userExtendDrawStart;
  initSetting.userExtendDrawEnd = data.extendDrawEnd || initSetting.userExtendDrawEnd;
  // 시스템 보조 선언
  initSetting.success = true;

  if (!lve.root.vars.isStart) {
    let timer;
    const checkInterval = 1000 / initSetting.frameLimit || 1;
    const ce = initSetting.canvas.element;
    const fn = lve.root.fn;

    const getProperties = function () {
      const obj = {};
      for (const key in this) {
        obj[key] = this[key];
      }
      return obj;
    };

    const convertTouchesToMouse = function (e) {
      const origin = getProperties.call(this);
      const changedTouche = getProperties.call(this.changedTouches[0]);
      const event = new MouseEvent(e, Object.assign({}, origin, changedTouche));
      const attchThings = {
        target: {
          value: this.target,
          enumerable: true
        },
        which: {
          value: 1,
          enumerable: true
        }
      };
      return Object.defineProperties(event, attchThings);
    };

    // 캔버스 이벤트 할당
    if (lve.checkMobile()) {
      // 모바일 이벤트 할당
      ce.addEventListener('touchstart', e => {
        const newEvent = convertTouchesToMouse.call(e, 'mousedown');
        fn.eventfilter(newEvent);
      });
      ce.addEventListener('touchend', e => {
        const newEvent = convertTouchesToMouse.call(e, 'mouseup');
        fn.eventfilter(newEvent);
      });
      ce.addEventListener('touchmove', (e) => {
        if (!timer) clearTimeout(timer);
        timer = setTimeout(() => {
          const newEvent = convertTouchesToMouse.call(e, 'mousemove');
          fn.eventfilter(newEvent);
        }, checkInterval);
      });
    } else {
      // PC 이벤트 등록
      ce.addEventListener('mousedown', fn.eventfilter);
      ce.addEventListener('mouseup', fn.eventfilter);
      ce.addEventListener('mousemove', (e) => {
        if (!timer) clearTimeout(timer);
        timer = setTimeout(() => {
          fn.eventfilter(e);
        }, checkInterval);
      });
    }

    // 기본 이벤트 할당
    ce.addEventListener('click', fn.eventfilter);
    ce.addEventListener('dblclick', fn.eventfilter);
    ce.addEventListener('contextmenu', fn.eventfilter);
    // fullscreen orientation
    window.addEventListener('orientationchange', () => {
      const screenElement = lve.root.cache.screenElement;
      if (lve.root.cache.destroy) return;
      if (screenElement === null) return;
      if (screenElement.getAttribute('data-fullscreen-extend') === 'true') {
        const screenScale = [
          window.screen.width / screenElement.width,
          window.screen.height / screenElement.height
        ].sort((a, b) => {
          return a - b
        })[0];
        screenElement.style.transform = 'scale(' + screenScale + ')';
        lve.root.cache.screenScale = screenScale;
      }
    });

    lve.root.cache.loseTime = performance.now();
    lve.root.vars.isStart = true;
    lve.root.vars.isRunning = true;
    lve.root.fn.ready().then(lve.root.fn.update);
  }
  return lve;
};