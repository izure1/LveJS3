export default function current() {

  let t = this;

  return {

    get canvas() {
      return t.setting.canvas;
    },

    get camera() {
      return t.usingCamera;
    },

    get fps() {
      return t.renderer.getFPS();
    },

    get paused() {
      return !t.isRunning;
    },

    get started() {
      return t.isStart;
    },

    get version() {
      return t.version;
    }

  };

};