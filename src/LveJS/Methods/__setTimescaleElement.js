export default function __setTimescaleElement(v) {

  switch (this.type) {

    case 'video':
      this.element.playbackRate = this.videoset.playbackRate * v
      break

  }

  return this

}