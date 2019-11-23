export default function __runAllPropertiesHandler() {

  let t

  t = this
  t = JSON.stringify(t)
  t = JSON.parse(t)

  delete t.name
  delete t.type
  delete t.element

  this.attr(t)

  return this

}