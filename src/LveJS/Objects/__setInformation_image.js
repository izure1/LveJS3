import ready from '../Utils/domReady';


export default function __setInformation_image() {

  let t;
  let s;
  let w, h;

  if (this.type !== 'image') {
    return this;
  }

  this.__system__.suppressJob.reserve('__setImage', () => {

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

    });

  });

  return this;

};