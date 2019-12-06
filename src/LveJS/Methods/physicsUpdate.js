import each from './each'


export default function physicsUpdate() {

  each.call(this, function () {
    this.__physicsUpdate()
  })

  return this

}