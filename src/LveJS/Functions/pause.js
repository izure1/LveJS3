export default function pause() {

  this.renderer.isRunning = false
  this.animator.isRunning = false
  this.physics.isRunning = false
  
  this.renderer.deltaTimer.pause()
  this.animator.deltaTimer.pause()

  for (let t of this.renderer.objects) {

    if (!t.element) continue
    if (!t.element.pause) continue
    if (t.element.pause.call) {

      t.element.pause()

    }

  }

  return this.lve

}