export default function each(f = function () {}) {

  for (let t of this.context) f.call(t, t)
  return this

}