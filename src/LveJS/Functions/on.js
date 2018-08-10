export default function on(e, h) {

  let t;

  e = e.split(' ');
  
  for (let p of e) {

    if (!(p in this.events)) {
      this.events[p] = [];
    }

    t = h.bind(this);
    this.events[p].push(t);

  }

  return this.lve;

};