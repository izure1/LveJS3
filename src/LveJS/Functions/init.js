import domReady from '../Utils/domReady'
import worldQuery from '../Helpers/worldQuery'


function isCanvasEl(raw) {
  return raw instanceof HTMLCanvasElement
}

function getCanvas(raw) {

  let c

  if (typeof raw === 'string') c = document.querySelector(raw)
  if (isCanvasEl(raw)) {
    c = raw
  }

  return c

}

/**
 * 
 * @param {Object} o  Scene (world) information
 * @description
 * Set up a world
 */
export default function init(o) {

  let c

  domReady.call(document, () => {

    this.renderer.init(o)
    this.physics.init()

    c = getCanvas(this.renderer.setting.canvas) || getCanvas(this.renderer.setting.canvas.element)

    if (isCanvasEl(c)) {

      this.renderer.setting.canvas = {}
      this.renderer.setting.canvas.context = c.getContext('2d')
      this.renderer.setting.canvas.element = c
      this.renderer.setting.canvas.context.save()

      this.renderer.resize()

      if (!this.renderer.isStart) this.renderer.start()
      if (!this.physics.isStart) this.physics.start()
      if (!this.animator.isStart) this.animator.start()


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

        const sizeObserve = {
          attributes: true
        }

        // 캔버스에 특정 요소가 변경되었을 때, 이를 감지하고 싶으면 this.observer.observe 메서드를 사용합니다.
        this.observer.init(c)
        this.observer.observe('change-size', sizeObserve, e => {

          let p = e.attributeName

          switch (p) {

            case 'width':
            case 'height':
              this.renderer.setting[p] = c[p]
              break

          }

        })

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