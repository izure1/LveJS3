import each from './each';


export default function filter(f) {

  let t;
  let w;

  f = f.bind(this);
  t = this.context.filter(f);
  w = this.__system__.world;

  return new LVE.classes.LveJSObjectSession(w, this.name, t);

};