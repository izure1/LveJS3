import instanceOf from '../Functions/instanceof';


export default function capture(u = lve.current.camera, o = {}) {

  let r;
  let s;
  let u2;
  let oc, nc;

  let {
    type,
    quality,
    scale = 1
  } = o;

  oc = this.renderer.setting.canvas.element;

  if (!oc) {
    return '';
  }

  nc = document.createElement('canvas');
  s = oc.width / oc.height;

  if (o.__length) {

    nc.width = o.width || (o.height * s);
    nc.height = o.height || (o.width / s);

    if (!o.width && !o.height) {
      nc.width = oc.width;
      nc.height = oc.height;
    }

  } else {

    nc.width = oc.width;
    nc.height = oc.height;

  }

  nc.width *= scale;
  nc.height *= scale;

  if (!instanceOf(u)) {
    u = this.hashTable.select(u);
    u = u[0];
  }

  u = u.get();
  u2 = this.renderer.camera;

  this.renderer.camera = u;
  this.lve.requestCaching(true);

  r = nc.getContext('2d').drawImage(oc, 0, 0, nc.width, nc.height);
  r = nc.toDataURL(type, quality);

  this.renderer.camera = u2;
  this.lve.requestCaching(true);

  return r;

};