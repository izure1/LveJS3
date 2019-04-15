import ready from '../Utils/domReady'


export default function __setInformationVideo() {

  let vp
  let c

  if (this.type !== 'video') {
    return this
  }

  ready.call(this.element, () => {

    this.__system__.world.lve.start(() => {

      // init videoset setting
      for (let p in this.__system__.audio.setting) {
        this.element[p] = this.__system__.audio.setting[p]
      }

    })

  })

  return this

}