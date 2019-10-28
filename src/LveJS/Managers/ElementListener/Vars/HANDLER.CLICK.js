import LveJSMouseEvent from '../../../LveJSMouseEvent'


export default function (e, cb) {

  let t

  t = new LveJSMouseEvent('click', e)
  cb(t)

}