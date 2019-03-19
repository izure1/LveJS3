export default function run() {

  // interval virtual, interval real, drawing frame
  let {
    extendStart,
    extendEnd,
    extendDrawStart,
    extendDrawEnd
  } = this.setting

  this.interval = this.deltaTimer.update()
  this.deltaTimer.clear()


  this.runCallbacks(extendStart, this.interval)

  if (this.isRunning) {

    this.runCallbacks(extendDrawStart, this.interval)
    this.update(this.interval)
    this.runCallbacks(extendDrawEnd, this.interval)

  }

  this.runCallbacks(extendEnd, this.interval)

  if (this.isRunning) {
    window.requestAnimationFrame(run.bind(this))
  }

}