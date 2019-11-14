import ready from '../Utils/domReady'
import getSizeofElement from '../Helpers/getSizeofElement'


/**
 * @param {String} s Element src
 */
export default function __setInformationElement(s = '', cb = function () {}) {

  let t
  let d

  this.__system__.suppressJob.clear('setElement')
  this.__system__.suppressJob.set('setElement', () => {

    s = this.__system__.world.assetManager.get(s) || s
    t = this.element

    // 엘리멘트와 매개변수로 넘어온 source 주소값이 다를 경우, 새롭게 불러들입니다.
    if (t.src !== s) {

      t.src = s
      if (t.load && t.load.call) t.load()

    }

    // 엘리멘트가 준비되면 실제 크기값을 저장합니다
    ready.call(t, () => {

      this.__system__.world.lve.start(w => {

        let c

        c = w.canvas
        d = getSizeofElement(t, this.style.width, this.style.height, c.width, c.height)

        this.__system__.style.width = d.width
        this.__system__.style.height = d.height

        this.__setPhysicsFixture()

        cb.call(this)

      })

      this.emit('load')

    }, () => {

      this.emit('error')

    })

  }, 0)

  return this

}