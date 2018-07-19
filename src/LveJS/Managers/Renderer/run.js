export default function run() {

  let tt;

  tt = this.deltaTime.update();

  if (!this.setting.isRunning) {
    this.update(tt);
  }

  window.requestAnimationFrame(run.bind(this));

};