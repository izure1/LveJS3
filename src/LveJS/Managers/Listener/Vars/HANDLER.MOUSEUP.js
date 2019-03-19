import LveJSMouseEvent from '../../../LveJSMouseEvent'


export default function (e) {

  let t
  
  t = new LveJSMouseEvent('mouseup', e)
  this.worldQuery(t)

}