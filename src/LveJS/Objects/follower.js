export default function follower() {

  let t, w;
  let r;

  t = this.get();
  w = this.__system__.world;
  r = [];

  if (!t) {
    return this;
  }

  for (let t of t.followset.follower) {

    r = [
      ...r,
      ...w.hashTable.select(t)
    ];

  }

  return new w.classes.LveJSObjectSession(w, this.name, r);

};