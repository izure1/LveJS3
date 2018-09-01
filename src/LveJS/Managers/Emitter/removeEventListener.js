import {
  removeArrayItem
} from '../../Utils/array';


export default function removeEventListener(e, h) {

  if (!(e in this.global)) {
    return this;
  }

  removeArrayItem(this.global[e], h);

  return this;

};