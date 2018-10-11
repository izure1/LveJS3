import LveJSMouseEvent from '../../../LveJSMouseEvent';


export default function (e) {

  let t;
  
  t = new LveJSMouseEvent('dblclick', e);
  this.worldQuery(t);

};