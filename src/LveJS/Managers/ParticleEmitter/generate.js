import getRandomInt from '../../Utils/getRandomInt'
import createUUID from '../../Utils/CreateUUID'


function getMaxiumDuration(v, duration) {

  if (v > duration) v = duration
  if (v < 0) v = 0

  return v

}

export default function generate(emitter) {

  let {
    src,
    element,
    particleset,
    className
  } = emitter

  if (!src) {
    return this
  }

  if (!element) {
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



  let {
    left,
    bottom,
    perspective,
    position
  } = emitter.style

  let elWidth = 0

  if (position === 'fixed') {
    elWidth = element.width
  }

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
    verticalAlign: 'middle',
    display: 'none'

  }).animate({

    scale: end

  }, duration).on('animateend', () => {

    particle.remove()

  }).applyLinearImpulse(toX, toY).addClass(className)



  let {
    fadeIn,
    fadeOut,
  } = particleset

  fadeIn = getMaxiumDuration(fadeIn, duration)
  fadeOut = getMaxiumDuration(fadeOut, duration)

  particle.fadeIn(fadeIn)
  setTimeout(() => {
    particle.fadeOut(fadeOut)
  }, duration - fadeOut)


  particle.__system__.ghost = true
  return this

}