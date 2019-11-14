export default class {

  constructor() {

    this.canvas = {}
    this.canvasScale = 1
    this.scaleDistance = 100
    this.width = undefined
    this.height = undefined
    this.backgroundColor = 'white'
    this.defaultCamera = 'camera'
    this.maxSight = null
    this.minSize = 0.35
    this.cacheLevel = 1
    this.isStart = false
    this.isRunning = false
    this.extendStart = []
    this.extendEnd = []
    this.extendDrawStart = []
    this.extendDrawEnd = []

  }

  get originWidth() {
    return this.width / this.canvasScale
  }

  get originHeight() {
    return this.height / this.canvasScale
  }

}