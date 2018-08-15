import each from './each';
import ready from '../Utils/domReady';


export default function pause() {

  each.call(this, function () {

    switch (this.type) {
      case 'video':
      case 'sprite':
        break;
      default:
        return;
    }

    if (this.element && this.element.pause && this.element.pause.call) {

      ready.call(this.element, () => {
        this.element.pause();
        this.element.dataset.playing = 'false';
      });
      
    }

    this.spriteset.playing = false;
    this.emit('pause');

  });

  return this;

};