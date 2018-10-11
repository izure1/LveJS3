import domReady from '../Utils/domReady';
import worldQuery from '../Helpers/worldQuery';


export default function init(o) {

  let c;

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

      if (!this.listener.inited) {

        this.listener.init(c, worldQuery.bind(this));

        // mobile events
        this.listener.addListener('touchstart');
        this.listener.addListener('touchend');
        this.listener.addListener('touchmove');

        // pc events
        this.listener.addListener('mousemove');
        this.listener.addListener('mousedown');
        this.listener.addListener('mouseup');
        this.listener.addListener('click');
        this.listener.addListener('dblclick');
        this.listener.addListener('contextmenu');

      }

    }

    if (!this.cache.inited) {

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