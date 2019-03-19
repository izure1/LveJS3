import instanceOf from './instanceof'


export default function calc(o = {}, c = lve.current.camera) {

  if (!instanceOf(c)) {
    c = this.hashTable.select(c)
    c = c[0]
  }

  

}