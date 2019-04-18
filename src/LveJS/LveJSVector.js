import ease from './Utils/easing'


class LveJSVector {

  /**
   * 
   * @param {Number} start 
   * @param {Number} end 
   * @param {Number} duration 
   * @param {String} easing
   * @param {Number} runtime
   */
  constructor(start, end, duration, easing = 'linear', runtime = 0) {

    this.start = start
    this.end = end
    this.duration = duration
    this.easing = easing
    this.runtime = runtime
    this.done = false

  }

  get value() {

    return this.done ? this.end : ease(this.easing, this.runtime, this.start, this.end - this.start, this.duration)
    
  }

  update(tt = 0) {

    this.runtime += tt

    if (this.runtime > this.duration) {
      this.runtime = this.duration
      this.done = true
    }

    return this.value

  }

}


export default LveJSVector