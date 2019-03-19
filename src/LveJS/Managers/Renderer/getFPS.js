let delta

export default function getFPS() {

  delta = this.interval / 1000
  return ~~(1 / delta)

}