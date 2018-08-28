export default function run() {

  let tt;

  tt = this.deltaTimer.update();
  this.deltaTimer.clear();

  if (this.isRunning) {

    this.update(tt);

  }

  window.requestAnimationFrame(run.bind(this));

};