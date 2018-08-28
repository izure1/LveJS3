import domReady from '../Utils/domReady';
import LveJSMouseEvent from '../LveJSMouseEvent';
import worldQuery from '../Helpers/worldQuery';


export default function init(o) {

  let c;
  let worldQ;

  worldQ = worldQuery.bind(this);

  domReady.call(document, () => {

    this.renderer.init(o);
    this.physics.init();

    if (o.canvas) {

      if (typeof o.canvas === 'string') c = document.querySelector(o.canvas);
      if (o.canvas instanceof HTMLCanvasElement) {
        c = o.canvas;
      }

      this.renderer.setting.canvas = {};
      this.renderer.setting.canvas.context = c.getContext('2d');
      this.renderer.setting.canvas.element = c;
      this.renderer.setting.canvas.context.save();
      this.renderer.start();
      this.physics.start();

    }

    if (!this.cache.inited) {

      let t;
      let i;

      i = this.renderer.setting.frameLimit || 1;
      i = 1000 / i;

      // 모바일 마우스 이벤트
      // 이는 PC의 MouseEvent와 동급으로 취급됩니다.
      c.addEventListener('touchstart', e => {
        t = new LveJSMouseEvent('mousedown', e);
        worldQ(t);
      });
      c.addEventListener('touchend', e => {
        t = new LveJSMouseEvent('mouseup', e);
        worldQ(t);
      });
      c.addEventListener('touchmove', (e) => {
        this.suppressJob.setSuppress('touchmoveEvent', () => {
          t = new LveJSMouseEvent('mousemove', e);
          worldQ(t);
        }, i);
      });

      // PC 마우스 이벤트
      c.addEventListener('mousedown', worldQ);
      c.addEventListener('mouseup', worldQ);
      c.addEventListener('mousemove', (e) => {
        this.suppressJob.setSuppress('mousemoveEvent', () => {
          worldQ(e);
        }, i);
      });

      c.addEventListener('click', worldQ);
      c.addEventListener('dblclick', worldQ);
      c.addEventListener('contextmenu', worldQ);

      for (let f of this.queue) f.call(this, this);

      this.cache.inited = true;
      delete this.queue;

    }

  });

  return this.lve;

  // fullscreen orientation
  // window.addEventListener('orientationchange', () => {
  //   const screenElement = lve.root.cache.screenElement;
  //   if (lve.root.cache.destroy) return;
  //   if (screenElement === null) return;
  //   if (screenElement.getAttribute('data-fullscreen-extend') === 'true') {
  //     const screenScale = [
  //       window.screen.width / screenElement.width,
  //       window.screen.height / screenElement.height
  //     ].sort((a, b) => {
  //       return a - b
  //     })[0];
  //     screenElement.style.transform = 'scale(' + screenScale + ')';
  //     lve.root.cache.screenScale = screenScale;
  //   }
  // });
};