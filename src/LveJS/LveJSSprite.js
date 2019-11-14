import domReady from './Utils/domReady'


class LveJSSprite {

  static getNextValue(start, end) {

    if (start < end) return 1
    else if (start > end) return -1
    else return 0

  }

  constructor(option, manager) {

    let {
      name = 'default',
        start = 0,
        end = 0,
        fps = Math.abs(start - end),
        src = null,
        elementSrc = src,
        frame = 0,
    } = option

    this.name = name
    this.src = src
    this.frame = frame
    this.start = start
    this.end = end
    this.fps = fps

    this.setHiddenProperty('next', LveJSSprite.getNextValue(start, end))
    this.setHiddenProperty('interval', 1000 / fps)
    this.setHiddenProperty('manager', manager)
    this.setHiddenProperty('element', null)
    this.setHiddenProperty('elementSrc', elementSrc)
    this.setHiddenProperty('width', 0)
    this.setHiddenProperty('height', 0)
    this.setHiddenProperty('ready', false)

    this.loadImage()

  }

  setHiddenProperty(name, value) {

    Object.defineProperty(this, name, {
      value,
      writable: true,
      enumerable: false,
    })

  }

  loadImage() {

    this.element = new Image
    this.element.src = this.elementSrc
    this.width = 0
    this.height = 0

    domReady.call(this.element, () => {
      this.width = this.element.naturalWidth / this.frame
      this.height = this.element.naturalHeight
      this.ready = true
    })

  }

  isOverflow(current) {

    // 정방향 재생일 경우
    if (this.next > 0) {

      if (current > this.end) {
        return true
      }

      if (current < this.start) {
        return true
      }

    }
    // 역방향 재생일 경우
    if (this.next < 0) {

      if (current < this.end) {
        return true
      }

      if (current > this.start) {
        return true
      }

    }

    return false

  }

  destroy() {
    this.manager.delete(this.name)
  }

}


export default LveJSSprite