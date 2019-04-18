export default function play() {

  if (!this.renderer.isStart) {
    return this.lve
  }

  this.renderer.isRunning = true
  this.animator.isRunning = true
  this.physics.isRunning = true
  
  this.renderer.deltaTimer.play()
  this.animator.deltaTimer.play()
  this.renderer.run()
  this.animator.run()
  this.physics.run()

  // video 유형의 객체 재생
  for (let t of this.renderer.objects) {

    if (!t.element) continue
    if (!t.element.play) continue
    if (t.element.play.call && t.element.dataset.playing === 'true') {

      t.element.play()

    }

  }

  return this.lve

}