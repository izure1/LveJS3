export default function current() {

  let t = this

  return {

    get camera() {
      return t.renderer.camera
    },

    get fps() {
      return t.renderer.getFPS()
    },

    get paused() {
      return !t.renderer.isRunning
    },

    get started() {
      return t.renderer.isStart
    },

    get canvas() {
      return t.canvas
    },

    get version() {
      return t.version
    },

    get world() {
      return t
    }

  }

}