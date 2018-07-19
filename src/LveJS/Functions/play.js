export default function play() {

  if (this.renderer.setting.isStart) {
    this.renderer.setting.isRunning = false;
  }

  return this;

};