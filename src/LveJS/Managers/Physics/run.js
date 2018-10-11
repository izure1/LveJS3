export default function run() {

  let r;

  r = this.setting.stepInterval;

  if (!this.isRunning) {
    return this;
  }

  this.update(r);

  setTimeout(() => {
    this.run();
  }, r);

};