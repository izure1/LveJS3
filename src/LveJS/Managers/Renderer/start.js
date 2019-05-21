import screenfull from 'screenfull'


export default function start() {

  this.isStart = true
  this.isRunning = true

  this.run()

  screenfull.onchange(() => {

    if (screenfull.isFullscreen) this.onFullscreen()
    else this.onExitFullscreen()

  })

}