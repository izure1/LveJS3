import LveJSMouseEvent from '../../../LveJSMouseEvent';


export default function (e) {

  let t;

  t = new LveJSMouseEvent('click', e);
  this.worldQuery(t);

};