export default function run() {

  let r;

  r = this.setting.stepInterval;

  if (this.isRunning) {
    this.update(r);
  }

  setTimeout(() => {
    this.run();
  }, r);

};