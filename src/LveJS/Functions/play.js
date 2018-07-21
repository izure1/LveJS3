export default function play() {

  if (this.renderer.isStart) {
    this.renderer.isRunning = false;
  }

  return this;

};