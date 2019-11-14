import getRandomInt from '../../Utils/getRandomInt'
import createUUID from '../../Utils/CreateUUID'


export default function generate(emitter) {

  let {
    src,
    element,
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

  if (!element) {
    return this
  }

  let elWidth = 0

  if (position === 'fixed') {
    elWidth = element.width
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
    gravityScale,
    fixedRoatation,
    density,
    friction,
    restitution,
  } = particleset

  
  let toX, toY

  toX = getRandomInt(-speed, speed)
  toY = getRandomInt(-speed, speed)

  rangeX /= 2
  rangeY /= 2
  rangeZ /= 2

  left += getRandomInt(-rangeX, rangeX) - (elWidth * start / 2)
  bottom += getRandomInt(-rangeY, rangeY)
  perspective += getRandomInt(-rangeZ, rangeZ)


  const particle = this.lve(`__particle_${createUUID()}__`).create({

    type: 'image',
    physics: 'dynamic',
    gravityscale: gravityScale,
    fixedrotation: fixedRoatation,
    src,
    density,
    friction,
    restitution,

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

    particle.remove()
    
  }).applyLinearImpulse(toX, toY).addClass(className)

  particle.__system__.ghost = true
  return this

}