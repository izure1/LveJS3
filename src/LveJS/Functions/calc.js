import instanceOf from './instanceof';
import DEFAULT_STYLE from '../Objects/Vars/DEFAULT_STYLE';


export default function calc(o = {}, c = lve.current.camera) {

  if (!instanceOf(c)) {
    c = this.hashTable.select(c);
    c = c[0];
  }

  

}