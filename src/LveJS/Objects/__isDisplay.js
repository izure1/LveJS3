export default function __isDisplay() {

  let s;

  s = this.__system__.style;

  return s.d_opacity && s.d_display && s.d_type;

};