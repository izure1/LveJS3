import ready from '../Utils/domReady'
import getSizeofElement from '../Helpers/getSizeofElement'

const JOB_SYMBOL = Symbol('setInformationElement')


/**
 * @param {String} s Element src
 */
export default function __setInformationElement(s = '', cb = function () {}) {

  let t
  let d
  
  this.__system__.ready.element.init()

  this.__system__.suppressJob.clear(JOB_SYMBOL)
  this.__system__.suppressJob.set(JOB_SYMBOL, () => {

    t = this.element
    s =
      this.__system__.world.assetManager.get(s) ?
      this.__system__.world.assetManager.get(s).getURL() : s


    // 엘리멘트와 매개변수로 넘어온 source 주소값이 다를 경우, 새롭게 불러들입니다.
    if (t.src !== s) {

      t.src = s
      if (t.load && t.load.call) t.load()

    }

    // 엘리멘트가 준비되면 실제 크기값을 저장합니다
    ready.call(t, () => {

      this.__system__.world.lve.start(() => {

        let c
        let w

        w = this.__system__.world
        c = w.canvas
        d = getSizeofElement(t, this.style.width, this.style.height, c.width, c.height)

        this.__system__.style.width = d.width
        this.__system__.style.height = d.height

        this.__setPhysicsFixture()
        this.__system__.ready.element.done()

        t.__isLoaded = true
        cb.call(this)

      })

      this.emit('load')

    }, () => {

      t.__isLoaded = false
      
      this.__system__.ready.element.done()
      this.emit('error')

    })

  }, 0)

  return this

}


// ready.call(this.element, () => {

//   setHiddenContext.call(this.element, '__isLoaded', true)
//   setAudioContext.call(this.element, this.__system__.audio.setting)

// }, () => {

//   setHiddenContext.call(this.element, '__isLoaded', false)
//   setAudioContext.call(this.element, this.__system__.audio.setting)

// })