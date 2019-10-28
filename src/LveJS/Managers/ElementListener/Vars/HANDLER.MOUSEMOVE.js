import LveJSMouseEvent from '../../../LveJSMouseEvent'


export default function (e, cb) {

  let t

  this.suppressJob.set('mousemove_duration', () => {

    t = new LveJSMouseEvent('mousemove', e)
    cb(t)

  }, this.setting.delay, this.setting.limit)

}