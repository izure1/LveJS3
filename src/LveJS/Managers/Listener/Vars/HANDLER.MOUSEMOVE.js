import LveJSMouseEvent from '../../../LveJSMouseEvent'


export default function (e) {

  let t

  this.suppressJob.set('mousemove_duration', () => {

    t = new LveJSMouseEvent('mousemove', e)
    this.worldQuery(t)

  }, this.setting.delay, this.setting.limit)

}