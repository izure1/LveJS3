import keycode from 'keycode'

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

      // Create default camera
      let defaultCamera = this.renderer.setting.defaultCamera
      if (defaultCamera && !this.renderer.isStart && !this.lve.exists(defaultCamera)) {

        if (defaultCamera) this.lve(defaultCamera).create({
          type: 'camera'
        }).use()

      }


      if (!this.renderer.isStart) this.renderer.start()
      if (!this.physics.isStart) this.physics.start()
      if (!this.animator.isStart) this.animator.start()


      if (this.keyboardListener.isNotInited) {

        this.keyboardListener.initKeys(keycode.codes)
        this.keyboardListener.initElement(window)

        this.keyboardListener.addListener('keydown', this.keyboardListener.pressKey)
        this.keyboardListener.addListener('keyup', this.keyboardListener.releaseKey)

      }

      if (this.mouseListener.isNotInited) {

        let keys = {
          LEFT: 1,
          WHEEL: 2,
          RIGHT: 3
        }

        this.mouseListener.initKeys(keys)
        this.mouseListener.initElement(window)

        this.mouseListener.addListener('mousedown', this.mouseListener.pressKey)
        this.mouseListener.addListener('mouseup', this.mouseListener.releaseKey)
        this.mouseListener.addListener('touchstart', this.mouseListener.pressKey)
        this.mouseListener.addListener('touchend', this.mouseListener.releaseKey)

      }

      if (this.canvasListener.isNotInited) {

        let cb = worldQuery.bind(this)

        this.canvasListener.initElement(c)

        // mobile events
        this.canvasListener.addListener('touchstart', cb)
        this.canvasListener.addListener('touchend', cb)
        this.canvasListener.addListener('touchmove', cb)

        // pc events
        this.canvasListener.addListener('mousemove', cb)
        this.canvasListener.addListener('mousedown', cb)
        this.canvasListener.addListener('mouseup', cb)
        this.canvasListener.addListener('click', cb)
        this.canvasListener.addListener('dblclick', cb)
        this.canvasListener.addListener('contextmenu', cb)

      }

      if (this.canvasObserver.isNotInited) {

        const sizeObserve = {
          attributes: true
        }

        // 캔버스에 특정 요소가 변경되었을 때, 이를 감지하고 싶으면 this.canvasObserver.observe 메서드를 사용합니다.
        this.canvasObserver.initElement(c)
        this.canvasObserver.observe('change-size', sizeObserve, e => {

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

    if (this.particleEmitter.isNotInited) {
      this.particleEmitter.initLve(this.lve)
    }

    if (this.spriteManager.isNotInited) {
      this.spriteManager.initLve(this.lve)
    }

    if (!this.cache.inited) {

      for (let f of this.queue) f.call(this, this)

      this.cache.inited = true
      delete this.queue

    }

  })

  return this.lve

}