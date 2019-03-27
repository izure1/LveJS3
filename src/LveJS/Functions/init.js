import domReady from '../Utils/domReady'
import worldQuery from '../Helpers/worldQuery'


export default function init(o) {

  let c

  domReady.call(document, () => {

    this.renderer.init(o)
    this.physics.init()

    if (o.canvas) {

      if (typeof o.canvas === 'string') c = document.querySelector(o.canvas)
      if (o.canvas instanceof HTMLCanvasElement) {
        c = o.canvas
      }

      this.renderer.setting.canvas = {}
      this.renderer.setting.canvas.context = c.getContext('2d')
      this.renderer.setting.canvas.element = c
      this.renderer.setting.canvas.context.save()
      this.renderer.start()
      this.physics.start()

      if (!this.listener.inited) {

        this.listener.init(c, worldQuery.bind(this))

        // mobile events
        this.listener.addListener('touchstart')
        this.listener.addListener('touchend')
        this.listener.addListener('touchmove')

        // pc events
        this.listener.addListener('mousemove')
        this.listener.addListener('mousedown')
        this.listener.addListener('mouseup')
        this.listener.addListener('click')
        this.listener.addListener('dblclick')
        this.listener.addListener('contextmenu')

      }

      if (!this.observer.inited) {

        this.observer.init(c)

        // 캔버스에 특정 요소가 변경되었을 때, 이를 감지하고 싶으면 this.observer.observe 메서드를 사용합니다.

      }

    }

    if (!this.cache.inited) {

      for (let f of this.queue) f.call(this, this)

      this.cache.inited = true
      delete this.queue

    }

  })

  return this.lve

}