'use strict';

export default function CreateUUID() {

  let r;
  let n, v;

  r = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    n = Math.random() * 16 | 0, v = c == 'x' ? n : (n & 0x3 | 0x8);
    return v.toString(16);
  });

  return new String(r);

};