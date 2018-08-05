import each from './each';
import {
  removeArrayItem
} from '../Utils/array';


export default function unfollow() {

  let u;
  let w;

  w = this.__system__.world;

  each.call(this, function () {

    u = this.followset.following;
    u = w.hashTable.select(u);
    u = u[0];

    if (!u) {
      return;
    }

    removeArrayItem(u.followset.follower, this.name);

    this.followset.position = {};
    this.followset.following = null;

    // unfollow, unfollowed 이벤트를 발생시킵니다
    this.emit('unfollow', {
      from: u
    });
    u.emit('unfollowed', {
      from: this
    });

  });

  return this;

};