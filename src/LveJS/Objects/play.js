import each from './each';


export default function play() {

  each.call(this, function () {

    switch (this.type) {
      case 'video':
      case 'sprite':
        break;
      default:
        return;
    }

    if (this.element && this.element.play && this.element.play.call) {
      this.element.play();
      this.element.dataset.playing = 'true';
    }

    this.spriteset.playing = true;
    this.emit('play');

  });

  return this;

};