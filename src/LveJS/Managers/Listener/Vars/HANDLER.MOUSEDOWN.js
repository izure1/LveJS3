import LveJSMouseEvent from '../../../LveJSMouseEvent';


export default function (e) {

  let t;
  
  t = new LveJSMouseEvent('mousedown', e);
  this.worldQuery(t);

};