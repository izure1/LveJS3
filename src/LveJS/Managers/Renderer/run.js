export default function run() {

  // interval virtual, interval real, drawing frame
  let {
    extendStart,
    extendEnd,
    extendDrawStart,
    extendDrawEnd
  } = this.setting;

  this.interval = this.deltaTimer.update();


  if (extendStart) extendStart();

  if (this.isRunning) {

    if (extendDrawStart) extendDrawStart();

    this.update(this.interval);

    if (extendDrawEnd) extendDrawEnd();

  }

  if (extendEnd) extendEnd();

  window.requestAnimationFrame(run.bind(this));

};