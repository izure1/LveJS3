import ready from '../Utils/domReady';


export default function __setInformationElement() {

  let t;
  let s;
  let w, h;

  this.__system__.suppressJob.reserve('setElement', () => {

    s = this.src || '';
    t = this.element;

    if (!s) {
      t.src = '';
      return;
    }

    w = this.style.width;
    h = this.style.height;

    if (typeof w === 'number') {
      w = `${w}px`;
    }

    if (typeof h === 'number') {
      h = `${h}px`;
    }

    t.src = s;
    t.style.width = w;
    t.style.height = h;

    ready.call(t, () => {

      document.body.appendChild(t);
      this.element = t;
      this.__system__.style.width = t.width;
      this.__system__.style.height = t.height;
      document.body.removeChild(t);

      this.emit('load');

    });

    if (t.load) {
      t.load();
    }

  });

  return this;

};