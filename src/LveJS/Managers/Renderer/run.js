export default function run() {

  // interval virtual, interval real, drawing frame
  let tt, iv, ir, df;
  let {
    extendStart,
    extendEnd,
    extendDrawStart,
    extendDrawEnd
  } = this.setting;

  tt = this.deltaTimer.update();

  iv = ~~(1000 / this.setting.frameLimit);
  ir = ~~tt;
  df = ir <= iv;


  if (extendStart) extendStart();

  if (this.isRunning && df) {

    if (extendDrawStart) extendDrawStart();

    this.update(tt);

    if (extendDrawEnd) extendDrawEnd();

  }

  if (extendEnd) extendEnd();

  window.requestAnimationFrame(run.bind(this));

};