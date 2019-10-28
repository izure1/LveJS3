import LveJSMouseEvent from '../../../LveJSMouseEvent'


export default function (e, cb) {

  let t
  
  t = new LveJSMouseEvent('mouseup', e)
  cb(t)

}