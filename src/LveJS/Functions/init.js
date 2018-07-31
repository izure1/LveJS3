import domReady from '../Utils/domReady';
import LveJSMouseEvent from '../LveJSMouseEvent';
import worldQuery from '../Helpers/worldQuery';


export default function init(o) {

  let c;

  domReady.call(document, () => {

    this.renderer.init(o);

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
        worldQuery(t);
      });
      c.addEventListener('touchend', e => {
        t = new LveJSMouseEvent('mouseup', e);
        worldQuery(t);
      });
      c.addEventListener('touchmove', (e) => {
        this.suppressJob.setSuppress('touchmoveEvent', () => {
          t = new LveJSMouseEvent('mousemove', e);
          worldQuery(t);
        }, i);
      });

      // PC 마우스 이벤트
      c.addEventListener('mousedown', worldQuery);
      c.addEventListener('mouseup', worldQuery);
      c.addEventListener('mousemove', (e) => {
        this.suppressJob.setSuppress('mousemoveEvent', () => {
          worldQuery(e);
        }, i);
      });

      c.addEventListener('click', worldQuery);
      c.addEventListener('dblclick', worldQuery);
      c.addEventListener('contextmenu', worldQuery);


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