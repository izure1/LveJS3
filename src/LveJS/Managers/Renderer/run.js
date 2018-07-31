export default function run() {

  // interval virtual, interval real, drawing frame
  let tt;
  let {
    extendStart,
    extendEnd,
    extendDrawStart,
    extendDrawEnd
  } = this.setting;

  tt = this.deltaTimer.update();


  if (extendStart) extendStart();

  if (this.isRunning) {

    if (extendDrawStart) extendDrawStart();

    this.update(tt);

    if (extendDrawEnd) extendDrawEnd();

  }

  if (extendEnd) extendEnd();

  window.requestAnimationFrame(run.bind(this));

};