export default function __runAllPropertiesHandler() {

  let t = {
    ...this
  }

  delete t.name
  delete t.type
  delete t.element

  this.attr(t)

  return this

}