export default function run() {

  this.interval = this.deltaTimer.update()
  this.deltaTimer.clear()

  if (this.isRunning) {
    this.update(this.interval)
  }

  if (this.isRunning) {
    window.requestAnimationFrame(run.bind(this))
  }

}