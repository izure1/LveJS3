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
      return !t.renderer.setting.isRunning;
    },

    get started() {
      return t.renderer.setting.isStart;
    },

    get version() {
      return t.version;
    }

  };

};