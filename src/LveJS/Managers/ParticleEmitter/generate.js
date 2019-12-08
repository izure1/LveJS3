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
    quantity,
  } = particleset

  let {
    left,
    bottom,
    perspective,
    position,
    scale,
  } = emitter.style

  rangeX *= scale
  rangeY *= scale
  rangeZ *= scale

  rangeX /= 2
  rangeY /= 2
  rangeZ /= 2

  let elWidth = 0
  if (position === 'fixed') elWidth = element.width

  start *= scale
  end *= scale



  for (let i = 0; i < quantity; i++) {

    let toX, toY
    let particlePosition

    toX = getRandomInt(-speed, speed)
    toY = getRandomInt(-speed, speed)

    particlePosition = {
      left,
      bottom,
      perspective
    }
    particlePosition.left += getRandomInt(-rangeX, rangeX) - (elWidth * start / 2)
    particlePosition.bottom += getRandomInt(-rangeY, rangeY)
    particlePosition.perspective += getRandomInt(-rangeZ, rangeZ)

    
    const particle = this.lve(`__particle_${createUUID()}__`).create({

      type: 'image',
      physics: 'dynamic',
      gravityscale: gravityScale,
      fixedrotation: fixedRoatation,
      src,
      density,
      friction,
      restitution,

    }).css(particlePosition).css({

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

  }

  return this

}