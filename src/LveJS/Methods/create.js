/**
 * 
 * @param {Object} o Object properties
 */
export default function create(o = {}) {

  let t
  let w

  for (const t of this.context) {
    if (t.name !== this.name) continue
    throw 'Already exist identifier name. Use another instead.'
  }

  t = this.__system__.world.lve.createObject(this.name, o)
  w = this.__system__.world

  w.hashTable.insert(this.name, t)
  w.lve.requestCaching()

  t.emit('create')

  return t

}