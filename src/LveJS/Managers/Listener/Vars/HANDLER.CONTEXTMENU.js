import LveJSMouseEvent from '../../../LveJSMouseEvent';


export default function (e) {

  let t;

  t = new LveJSMouseEvent('contextmenu', e);
  this.worldQuery(t);

};