import LveJSMouseEvent from '../../../LveJSMouseEvent'

const JOB_SYMBOL = Symbol('mousemove_duration')

export default function (e, cb) {

  let t

  this.suppressJob.set(JOB_SYMBOL, () => {

    t = new LveJSMouseEvent('mousemove', e)
    cb(t)

  }, this.setting.delay, this.setting.limit)

}