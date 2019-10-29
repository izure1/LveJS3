import getRandomInt from '../../Utils/getRandomInt'
import createUUID from '../../Utils/CreateUUID'


export default function generate(emitter) {

  let {
    src,
    particleset,
    className
  } = emitter

  let {
    left,
    bottom,
    perspective,
    position
  } = emitter.style

  if (!src) {
    return this
  }


  let {
    rangeX,
    rangeY,
    rangeZ,
    start,
    end,
    duration,
    blendMode,
    speed,
  } = particleset

  
  let toX, toY

  toX = getRandomInt(-speed, speed)
  toY = getRandomInt(-speed, speed)

  rangeX /= 2
  rangeY /= 2
  rangeZ /= 2

  left += getRandomInt(-rangeX, rangeX)
  bottom += getRandomInt(-rangeY, rangeY)
  perspective += getRandomInt(-rangeZ, rangeZ)


  const particle = this.lve(`__particle_${createUUID()}__`).create({

    type: 'image',
    physics: 'dynamic',
    density: 0,
    friction: 0.25,
    restitution: 0.5,
    src,

  }).css({

    left,
    bottom,
    perspective,
    position,
    scale: start,
    blendMode,
    pointerEvents: false,
    verticalAlign: 'middle'

  }).animate({

    scale: end

  }, duration).on('animateend', () => {

    particle.__setPhysicsDestroy()
    particle.remove()

  }).applyLinearImpulse(toX, toY).addClass(className)

  particle.__system__.ghost = true
  return this

}