export default function play() {

  if (!this.renderer.isStart) {
    return this.lve;
  }

  this.renderer.isRunning = true;
  this.physics.isRunning = true;
  
  this.renderer.deltaTimer.play();

  // video 유형의 객체 재생
  for (let t of this.renderer.objects) {

    if (!t.element) continue;
    if (!t.element.play) continue;
    if (t.element.play.call && t.element.dataset.playing === 'true') {

      t.element.play();

    }

  }

  return this.lve;

};