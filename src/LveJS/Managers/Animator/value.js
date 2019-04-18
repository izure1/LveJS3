export default function value(id) {

  let t

  t = this.get(id)

  return t ? t.value : null

}