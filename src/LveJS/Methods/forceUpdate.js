export default function (tt = 0) {

  this.__animationUpdate(tt)
  this.__transitionUpdate(tt)
  this.__spriteUpdate(tt)
  this.__physicsUpdate()

  return this

}